import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbn6v7b5m.css';
import '../../css/z/zd_hbsbad.css';
import '../../css/r/rp7oy-b8j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nbn6v7b5m"/><path class="zd_hbsbad"/><path class="rp7oy-b8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:finn-light"} {...others} />);
}

export default Component;
