import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uf_3yubea.css';
import '../../css/z/z59xi4--h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uf_3yubea"/><path class="z59xi4--h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bank"} {...others} />);
}

export default Component;
