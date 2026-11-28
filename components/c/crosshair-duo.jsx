import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpyhxgbzb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z6g16vb1k.css';
import '../../css/z/zy1x-fbow.css';
import '../../css/q/q3fxh8bea.css';
import '../../css/r/rn6jb7b0d.css';
import '../../css/s/smm9s4byl.css';
import '../../css/f/fwrnagp8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hpyhxgbzb secondary"/><g class="dt0cm9dhy primary"><path class="z6g16vb1k"/><path class="zy1x-fbow"/><path class="q3fxh8bea"/><path class="rn6jb7b0d"/><path class="smm9s4byl"/><path class="fwrnagp8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:crosshair-duo"} {...others} />);
}

export default Component;
