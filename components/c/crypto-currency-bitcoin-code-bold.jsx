import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tne0-ydfm.css';
import '../../css/j/jqmdqobgy.css';
import '../../css/n/n96n0k97b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tne0-ydfm"/><path class="jqmdqobgy"/><path class="n96n0k97b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:crypto-currency-bitcoin-code-bold"} {...others} />);
}

export default Component;
