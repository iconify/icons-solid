import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/znqlacbrg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y9ceo_bwp.css';
import '../../css/m/macze1bzi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary znqlacbrg"/><g class="dt0cm9dhy primary"><path class="y9ceo_bwp"/><path class="macze1bzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:toothbrush-duo"} {...others} />);
}

export default Component;
