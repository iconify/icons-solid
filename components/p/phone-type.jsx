import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y9w5pac2a.css';
import '../../css/b/bb-d19b-k.css';
import '../../css/r/r755v_b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y9w5pac2a"/><path class="bb-d19b-k"/><path class="r755v_b0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:phone-type"} {...others} />);
}

export default Component;
