import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/be-h8wbdp.css';
import '../../css/u/u7oeflsek.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="be-h8wbdp"/><path class="u7oeflsek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:cellphone-2-horizontal-line"} {...others} />);
}

export default Component;
