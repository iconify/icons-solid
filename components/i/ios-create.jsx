import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwypuebih.css';
import '../../css/c/cxt3jkwxn.css';
import '../../css/v/vhlyezb4x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mwypuebih"/><path class="cxt3jkwxn"/><g><path class="vhlyezb4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-create"} {...others} />);
}

export default Component;
