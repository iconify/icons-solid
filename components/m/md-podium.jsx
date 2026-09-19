import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ara2u6bia.css';
import '../../css/g/g1ssb8box.css';
import '../../css/p/ps_nwu9ub.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ara2u6bia"/><path class="g1ssb8box"/><path class="ps_nwu9ub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-podium"} {...others} />);
}

export default Component;
