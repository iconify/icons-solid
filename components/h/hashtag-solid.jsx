import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hy41j1bcb.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="hy41j1bcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:hashtag-solid"} {...others} />);
}

export default Component;
