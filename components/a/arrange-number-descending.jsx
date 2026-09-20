import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nxmy0_k9f.css';
import '../../css/e/eqoezb_0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nxmy0_k9f"/><path class="eqoezb_0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:arrange-number-descending"} {...others} />);
}

export default Component;
