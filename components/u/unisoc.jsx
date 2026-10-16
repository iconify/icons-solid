import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edp4vc3jr.css';

const viewBox = {"width":49.2,"height":49.2,"left":19.5,"top":18.3};
const content = `<path class="edp4vc3jr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:unisoc"} {...others} />);
}

export default Component;
