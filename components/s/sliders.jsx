import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/e/ertbex__b.css';
import '../../css/z/z2w-83bda.css';
import '../../css/l/lrx87p__r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="ertbex__b"/><circle class="z2w-83bda"/><path class="lrx87p__r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:sliders"} {...others} />);
}

export default Component;
