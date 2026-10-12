import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u1iyo_ehf.css';
import '../../css/i/ikcfh-b2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u1iyo_ehf"/><path class="ikcfh-b2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-bold"} {...others} />);
}

export default Component;
