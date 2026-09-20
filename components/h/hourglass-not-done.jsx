import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b831m4gil.css';
import '../../css/y/ymi7bmilz.css';
import '../../css/u/u7gs_rbma.css';
import '../../css/m/my6364gtl.css';
import '../../css/c/c2_0dtqer.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="b831m4gil"/><path class="ymi7bmilz"/><path class="u7gs_rbma"/><path class="my6364gtl"/><path class="c2_0dtqer"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hourglass-not-done"} {...others} />);
}

export default Component;
