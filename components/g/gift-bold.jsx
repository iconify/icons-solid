import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7njcn22a.css';
import '../../css/m/mtulgmmtd.css';
import '../../css/z/zcdzjebcp.css';
import '../../css/j/jrz2xqc7b.css';
import '../../css/u/ueafoybns.css';
import '../../css/j/jixcgz__o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n7njcn22a"/><path class="mtulgmmtd"/><path class="zcdzjebcp"/><path class="jrz2xqc7b"/><path class="ueafoybns"/><path class="jixcgz__o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gift-bold"} {...others} />);
}

export default Component;
