import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgry-2mds.css';
import '../../css/m/m4hhobcxn.css';
import '../../css/c/cx7t3xbre.css';
import '../../css/z/zqrfyfbys.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bgry-2mds"/><path class="m4hhobcxn"/><path class="cx7t3xbre"/><path class="zqrfyfbys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:pairdrop"} {...others} />);
}

export default Component;
