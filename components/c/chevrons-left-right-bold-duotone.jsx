import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/z/zp4lv4mif.css';
import '../../css/z/z92cejbkn.css';
import '../../css/j/jrxr2kb5a.css';
import '../../css/s/sxc-zkb1d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="zp4lv4mif"/><path class="z92cejbkn"/></g><path class="jrxr2kb5a"/><path class="sxc-zkb1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-left-right-bold-duotone"} {...others} />);
}

export default Component;
