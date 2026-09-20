import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/arh3zlb8m.css';
import '../../css/c/cqjcetbny.css';
import '../../css/l/l8r-h8nlg.css';
import '../../css/t/tx1vtyvza.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="arh3zlb8m"/><path class="cqjcetbny"/><path clip-rule="evenodd" class="l8r-h8nlg"/><path class="tx1vtyvza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:dog-1-flat"} {...others} />);
}

export default Component;
