import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxnh_641e.css';
import '../../css/t/tiggjjbxq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hxnh_641e"/><path class="tiggjjbxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-db2-warehouse"} {...others} />);
}

export default Component;
