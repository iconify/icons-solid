import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4e7xccpj.css';
import '../../css/y/yos29kf3l.css';
import '../../css/o/ohbaa0bxk.css';
import '../../css/c/ce1fk3tdi.css';
import '../../css/i/isgrz6bvr.css';
import '../../css/u/ulg6dsshy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l4e7xccpj"/><path class="yos29kf3l"/><path class="ohbaa0bxk"/><path class="ce1fk3tdi"/><path class="isgrz6bvr"/><path class="ulg6dsshy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:natural-disaster-flood"} {...others} />);
}

export default Component;
