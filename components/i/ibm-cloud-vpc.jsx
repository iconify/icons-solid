import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xz4qtlb3x.css';
import '../../css/g/glzb1mbfz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xz4qtlb3x"/><path class="glzb1mbfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-vpc"} {...others} />);
}

export default Component;
