import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-oiem-5f.css';
import '../../css/m/mw_3mdbfk.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="q-oiem-5f"/><path class="mw_3mdbfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:call-hold-16"} {...others} />);
}

export default Component;
