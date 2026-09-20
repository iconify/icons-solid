import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/es5m-8btd.css';
import '../../css/d/d3pnbn4xy.css';
import '../../css/c/ch1shxbag.css';
import '../../css/t/t_rubviit.css';
import '../../css/w/wislszbwk.css';
import '../../css/f/f0swzwbvy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="es5m-8btd"/><path class="d3pnbn4xy"/><path class="ch1shxbag"/><path class="t_rubviit"/><path class="wislszbwk"/><path class="f0swzwbvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:movies-reel"} {...others} />);
}

export default Component;
