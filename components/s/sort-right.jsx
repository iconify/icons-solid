import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyjt9lq7v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wyjt9lq7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icons8:sort-right"} {...others} />);
}

export default Component;
