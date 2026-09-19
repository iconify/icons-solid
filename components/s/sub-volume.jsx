import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4fd6hbib.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="v4fd6hbib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:sub-volume"} {...others} />);
}

export default Component;
