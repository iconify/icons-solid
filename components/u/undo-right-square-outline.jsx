import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itcl84bfm.css';
import '../../css/m/mzfoi9l1e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="itcl84bfm"/><path clip-rule="evenodd" class="mzfoi9l1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:undo-right-square-outline"} {...others} />);
}

export default Component;
