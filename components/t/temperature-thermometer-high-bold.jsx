import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3os1xhir.css';
import '../../css/d/d6d0x4b4m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z3os1xhir"/><path class="d6d0x4b4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:temperature-thermometer-high-bold"} {...others} />);
}

export default Component;
