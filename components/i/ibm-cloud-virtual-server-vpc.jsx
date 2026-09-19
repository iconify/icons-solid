import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-cigyqaj.css';
import '../../css/d/dmmzmkb4s.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="o-cigyqaj"/><path class="dmmzmkb4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-virtual-server-vpc"} {...others} />);
}

export default Component;
