import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kd0_zwbpj.css';

const viewBox = {"width":12,"height":12};
const content = `<path clip-rule="evenodd" class="kd0_zwbpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:close-xs"} {...others} />);
}

export default Component;
