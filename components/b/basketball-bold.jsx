import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg9kmqbyf.css';
import '../../css/a/aybm1m1ha.css';
import '../../css/m/mldoj823a.css';
import '../../css/l/lbot12b7s.css';
import '../../css/x/xxk_-obsb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="eg9kmqbyf"/><path class="aybm1m1ha"/><path class="mldoj823a"/><path class="lbot12b7s"/><path class="xxk_-obsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:basketball-bold"} {...others} />);
}

export default Component;
