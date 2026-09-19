import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfpu3wblp.css';
import '../../css/n/nvg2ltb1j.css';
import '../../css/e/ezjkribqn.css';
import '../../css/g/g4975_hat.css';
import '../../css/r/rft2crbfo.css';
import '../../css/v/vlkwkbc-g.css';
import '../../css/p/pdg_rb70p.css';
import '../../css/m/m-_a-f3wa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jfpu3wblp"/><path class="nvg2ltb1j"/><path class="ezjkribqn"/><path class="g4975_hat"/><path class="rft2crbfo"/><path class="vlkwkbc-g"/><path class="pdg_rb70p"/><path class="m-_a-f3wa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-apis"} {...others} />);
}

export default Component;
