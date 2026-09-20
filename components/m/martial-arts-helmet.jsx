import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fomg-571h.css';
import '../../css/r/r0oc75bls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fomg-571h"/><path class="r0oc75bls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:martial-arts-helmet"} {...others} />);
}

export default Component;
