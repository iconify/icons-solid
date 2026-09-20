import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2f7h7_xh.css';
import '../../css/j/jbyel523s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="m2f7h7_xh"/><path clip-rule="evenodd" class="jbyel523s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:gallery"} {...others} />);
}

export default Component;
