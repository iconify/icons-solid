import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aul0jfv-r.css';
import '../../css/u/ut554nzkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="aul0jfv-r"/><path class="ut554nzkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:user-identifier-card"} {...others} />);
}

export default Component;
