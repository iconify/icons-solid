import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z-3_bibib.css';
import '../../css/w/w_5heldpj.css';
import '../../css/i/iwf9cnu_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z-3_bibib"/><path class="w_5heldpj"/><path class="iwf9cnu_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:message-edit"} {...others} />);
}

export default Component;
