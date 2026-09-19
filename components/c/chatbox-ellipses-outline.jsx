import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-ygl7brj.css';
import '../../css/d/dc-p_7bld.css';
import '../../css/i/iehx50jjq.css';
import '../../css/h/hnm18mbpu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l-ygl7brj"/><circle class="dc-p_7bld"/><circle class="iehx50jjq"/><circle class="hnm18mbpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:chatbox-ellipses-outline"} {...others} />);
}

export default Component;
