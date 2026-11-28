import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pegn_acie.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o4w-2_jvj.css';
import '../../css/b/bab-ptlum.css';
import '../../css/n/nvqat8ovl.css';
import '../../css/e/e9v8jcb4j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pegn_acie secondary"/><g class="dt0cm9dhy primary"><path class="o4w-2_jvj"/><path class="bab-ptlum"/><path class="nvqat8ovl"/><path class="e9v8jcb4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ai-dataset-duo"} {...others} />);
}

export default Component;
