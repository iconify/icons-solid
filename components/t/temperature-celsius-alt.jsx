import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xq6e4izvw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xq6e4izvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:temperature-celsius-alt"} {...others} />);
}

export default Component;
