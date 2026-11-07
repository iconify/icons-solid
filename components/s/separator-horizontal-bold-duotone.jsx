import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/z/z-fwhccia.css';
import '../../css/k/kwhpv5b4r.css';
import '../../css/w/wj-op7bjd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="z-fwhccia"/><path class="kwhpv5b4r"/></g><path class="wj-op7bjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:separator-horizontal-bold-duotone"} {...others} />);
}

export default Component;
