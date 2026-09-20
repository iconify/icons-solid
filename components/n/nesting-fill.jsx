import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/p/p7qvggt4v.css';
import '../../css/r/rh6v-k6nx.css';
import '../../css/m/mof3eqe_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect transform="rotate(90 18 15)" class="p7qvggt4v"/><rect transform="rotate(-90 6 8)" class="rh6v-k6nx"/><path class="mof3eqe_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:nesting-fill"} {...others} />);
}

export default Component;
