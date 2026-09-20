import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2dutkr2l.css';
import '../../css/m/m1fn-qbfk.css';
import '../../css/w/wt6hebnha.css';
import '../../css/k/kkrdvddeg.css';
import '../../css/l/larysibsv.css';
import '../../css/s/sn1x08b6h.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="u2dutkr2l"/><circle transform="matrix(-1 0 0 1 36 36)" class="m1fn-qbfk"/><path class="wt6hebnha"/><circle class="kkrdvddeg"/><circle class="larysibsv"/><circle class="sn1x08b6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:red-eye"} {...others} />);
}

export default Component;
