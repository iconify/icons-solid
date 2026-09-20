import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e07hwbb_f.css';
import '../../css/j/jjlq6dbda.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e07hwbb_f"/><path class="jjlq6dbda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:adventurelog-light"} {...others} />);
}

export default Component;
