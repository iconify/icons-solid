import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gngy5vaph.css';
import '../../css/q/qsez0nite.css';
import '../../css/e/e5jfj3b2v.css';
import '../../css/m/mfg1gacjw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gngy5vaph"/><path class="qsez0nite"/><path class="e5jfj3b2v"/><path class="mfg1gacjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-validation-02"} {...others} />);
}

export default Component;
