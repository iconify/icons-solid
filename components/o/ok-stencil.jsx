import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df7-84bmu.css';
import '../../css/w/whpncgbes.css';
import '../../css/l/lbxg3kb3a.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="df7-84bmu"/><path class="whpncgbes"/><path class="lbxg3kb3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ok-stencil"} {...others} />);
}

export default Component;
