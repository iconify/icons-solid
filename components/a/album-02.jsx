import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z0-2mfieg.css';
import '../../css/y/yz_jegb5q.css';
import '../../css/s/sn7cxmbyk.css';
import '../../css/v/v0trjrv3o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z0-2mfieg"/><path class="yz_jegb5q"/><path class="sn7cxmbyk"/><path class="v0trjrv3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:album-02"} {...others} />);
}

export default Component;
