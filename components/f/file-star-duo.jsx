import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyja28bos.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y9mzy0bvl.css';
import '../../css/h/hji4qyb_f.css';
import '../../css/c/cr7gqybwy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iyja28bos secondary"/><g class="dt0cm9dhy primary"><path class="y9mzy0bvl"/><path class="hji4qyb_f"/><path class="cr7gqybwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:file-star-duo"} {...others} />);
}

export default Component;
