import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txtpdbbzb.css';
import '../../css/t/t2cfwekii.css';
import '../../css/z/zvi_0b-ar.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="txtpdbbzb"/><path class="t2cfwekii"/><path class="zvi_0b-ar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:datapup"} {...others} />);
}

export default Component;
