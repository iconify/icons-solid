import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nswe24ysu.css';
import '../../css/g/gwoyifb9a.css';
import '../../css/i/i93joqjpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nswe24ysu"/><path class="gwoyifb9a"/><circle transform="rotate(90 12 12)" class="i93joqjpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:refresh-dot"} {...others} />);
}

export default Component;
