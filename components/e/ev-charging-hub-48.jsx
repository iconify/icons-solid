import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4fy6acsx.css';
import '../../css/b/bu7pjbvso.css';
import '../../css/h/h9uc7tbsz.css';
import '../../css/g/gj478sbzc.css';
import '../../css/b/b8z332bko.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i4fy6acsx"/><path class="bu7pjbvso"/><path class="h9uc7tbsz"/><path class="gj478sbzc"/><path class="b8z332bko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-charging-hub-48"} {...others} />);
}

export default Component;
