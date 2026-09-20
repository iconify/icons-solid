import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/r/rj2xaobyj.css';
import '../../css/b/bfezebbwk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="rj2xaobyj"/><path class="bfezebbwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-export"} {...others} />);
}

export default Component;
