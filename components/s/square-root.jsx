import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n0ky-ob5i.css';
import '../../css/n/nd-7h3bbm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n0ky-ob5i"/><path class="nd-7h3bbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:square-root"} {...others} />);
}

export default Component;
