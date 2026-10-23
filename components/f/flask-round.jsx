import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b1ienzhrd.css';
import '../../css/m/m6z3eqbcm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b1ienzhrd"/><path class="m6z3eqbcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:flask-round"} {...others} />);
}

export default Component;
