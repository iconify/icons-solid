import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjmrwubzx.css';
import '../../css/r/roph-ga5n.css';
import '../../css/t/tu9oyqbqv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cjmrwubzx"/><path class="roph-ga5n"/><path class="tu9oyqbqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:qrdo"} {...others} />);
}

export default Component;
