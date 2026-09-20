import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/ksw71ybnc.css';
import '../../css/f/fsvxv_bku.css';
import '../../css/p/pl16qnbxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ksw71ybnc"/><circle class="fsvxv_bku"/><circle class="pl16qnbxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:music"} {...others} />);
}

export default Component;
