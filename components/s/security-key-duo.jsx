import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smirgkmzn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pbji87ens.css';
import '../../css/x/x20ovybwp.css';
import '../../css/u/ueob06b-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary smirgkmzn"/><g class="dt0cm9dhy primary"><path class="pbji87ens"/><path class="x20ovybwp"/><path class="ueob06b-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:security-key-duo"} {...others} />);
}

export default Component;
