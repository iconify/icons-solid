import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atti1kbuc.css';
import '../../css/w/w57s-x_gs.css';
import '../../css/r/rkutulbsh.css';
import '../../css/q/qzguk0yob.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="atti1kbuc"/><path clip-rule="evenodd" class="w57s-x_gs"/><path class="rkutulbsh"/><path class="qzguk0yob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:map-marker-1"} {...others} />);
}

export default Component;
