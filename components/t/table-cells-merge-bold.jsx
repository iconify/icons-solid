import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/myg4xebay.css';
import '../../css/v/vz7kdz1fb.css';
import '../../css/w/w_91c9bhk.css';
import '../../css/c/chnbh0b2d.css';
import '../../css/f/fsm6edcal.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="myg4xebay"/><path class="vz7kdz1fb"/><path class="w_91c9bhk"/><path class="chnbh0b2d"/><path class="fsm6edcal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-cells-merge-bold"} {...others} />);
}

export default Component;
