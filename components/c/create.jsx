import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv8czdbir.css';
import '../../css/t/ti_zwx44j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xv8czdbir"/><path class="ti_zwx44j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:create"} {...others} />);
}

export default Component;
