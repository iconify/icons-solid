import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_09h_bys.css';
import '../../css/r/r62on_nvj.css';
import '../../css/v/v_ckypzwj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x_09h_bys"/><path class="r62on_nvj"/><path class="v_ckypzwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:palette-bold"} {...others} />);
}

export default Component;
