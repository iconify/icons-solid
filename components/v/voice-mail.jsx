import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/ndoiikbvp.css';
import '../../css/h/hpp_p1b6m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ndoiikbvp"/><path class="hpp_p1b6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:voice-mail"} {...others} />);
}

export default Component;
