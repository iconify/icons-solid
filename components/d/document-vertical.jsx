import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y0vo7tb2u.css';
import '../../css/v/vy9mlrb9v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y0vo7tb2u"/><path class="vy9mlrb9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-vertical"} {...others} />);
}

export default Component;
