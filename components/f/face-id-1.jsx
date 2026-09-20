import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n66dk1bdi.css';
import '../../css/r/req7y8bdh.css';
import '../../css/u/uahmt8bhp.css';
import '../../css/c/camlz7t2l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n66dk1bdi"/><path class="req7y8bdh"/><path class="uahmt8bhp"/><path class="camlz7t2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:face-id-1"} {...others} />);
}

export default Component;
