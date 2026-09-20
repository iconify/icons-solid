import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wom-q7bxg.css';
import '../../css/v/v8yyxwekg.css';
import '../../css/m/mmsm-4b5v.css';
import '../../css/r/r1zjn8keh.css';
import '../../css/m/mycfl4a0v.css';
import '../../css/e/epb-heb6n.css';
import '../../css/p/p3rgnibqe.css';
import '../../css/r/rfc8t4bhw.css';
import '../../css/f/f3xzq7xsj.css';
import '../../css/i/i3n3w6btv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wom-q7bxg"/><path class="v8yyxwekg"/><path class="mmsm-4b5v"/><path class="r1zjn8keh"/><circle class="mycfl4a0v"/><circle class="epb-heb6n"/><circle class="p3rgnibqe"/><circle class="rfc8t4bhw"/><circle class="f3xzq7xsj"/><ellipse class="i3n3w6btv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:game-die"} {...others} />);
}

export default Component;
