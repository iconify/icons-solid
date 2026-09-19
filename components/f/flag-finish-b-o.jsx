import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dszoyk3rx.css';
import '../../css/o/oc7q_ob4j.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="dszoyk3rx"/><path class="oc7q_ob4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:flag-finish-b-o"} {...others} />);
}

export default Component;
