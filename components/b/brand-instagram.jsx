import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xrwvqnbku.css';
import '../../css/z/z7pn4gb6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xrwvqnbku"/><path class="z7pn4gb6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:brand-instagram"} {...others} />);
}

export default Component;
