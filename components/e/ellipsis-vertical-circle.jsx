import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vuejpjjmz.css';
import '../../css/r/r6fga5szw.css';
import '../../css/u/ualmvtb9v.css';
import '../../css/l/lsg5j7ibl.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="vuejpjjmz"/><circle class="r6fga5szw"/><circle class="ualmvtb9v"/><path class="lsg5j7ibl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:ellipsis-vertical-circle"} {...others} />);
}

export default Component;
