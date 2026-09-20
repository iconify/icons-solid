import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/q/q-zkaqb7e.css';
import '../../css/p/pw_i8cckx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="q-zkaqb7e"/><path class="pw_i8cckx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:carbs"} {...others} />);
}

export default Component;
