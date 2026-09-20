import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/faye_bcvv.css';
import '../../css/d/dg6f8nblg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="faye_bcvv"/><path clip-rule="evenodd" class="dg6f8nblg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:metf"} {...others} />);
}

export default Component;
