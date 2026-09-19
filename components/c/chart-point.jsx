import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgpzimtyu.css';
import '../../css/h/htze66_3o.css';
import '../../css/m/m04ixnmcv.css';
import '../../css/r/r0i5cfcqk.css';
import '../../css/j/j5gdk4bny.css';
import '../../css/c/c4weh0bic.css';
import '../../css/q/q-5o44w6e.css';
import '../../css/u/u__pg2biy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hgpzimtyu"/><circle class="htze66_3o"/><circle class="m04ixnmcv"/><circle class="r0i5cfcqk"/><path class="j5gdk4bny"/><circle class="c4weh0bic"/><circle class="q-5o44w6e"/><path class="u__pg2biy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chart-point"} {...others} />);
}

export default Component;
