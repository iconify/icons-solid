import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/grb8i2b2m.css';
import '../../css/a/a28-f9bvr.css';
import '../../css/b/bfh75ponz.css';
import '../../css/g/gcbrm_bln.css';
import '../../css/a/aygheqbbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="grb8i2b2m"/><path clip-rule="evenodd" class="a28-f9bvr"/><path class="bfh75ponz"/><path clip-rule="evenodd" class="gcbrm_bln"/><path class="aygheqbbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:chicken-grilled-stream-flat"} {...others} />);
}

export default Component;
