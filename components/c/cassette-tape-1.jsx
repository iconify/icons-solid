import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdw8jccgb.css';
import '../../css/n/nvzlklb-t.css';
import '../../css/b/bqme1cbrd.css';
import '../../css/k/kzplcmzam.css';
import '../../css/e/eqqizn7qf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tdw8jccgb"/><path class="nvzlklb-t"/><path class="bqme1cbrd"/><path class="kzplcmzam"/><path class="eqqizn7qf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:cassette-tape-1"} {...others} />);
}

export default Component;
