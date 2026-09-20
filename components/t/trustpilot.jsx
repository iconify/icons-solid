import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m55j3uj5v.css';
import '../../css/r/ri0jf-b7o.css';
import '../../css/h/hkyoaf6el.css';

const viewBox = {"width":600,"height":147.3,"left":20.5,"top":248.5};
const content = `<path class="m55j3uj5v"/><path class="ri0jf-b7o"/><path class="hkyoaf6el"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:trustpilot"} {...others} />);
}

export default Component;
