import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mr5s_x-nn.css';
import '../../css/b/bqij9q-9y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mr5s_x-nn"/><path class="bqij9q-9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:arrow-circle-left"} {...others} />);
}

export default Component;
