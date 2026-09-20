import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smpgmkb8n.css';
import '../../css/i/iush4bsal.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="smpgmkb8n"/><path class="iush4bsal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:end-arrow"} {...others} />);
}

export default Component;
