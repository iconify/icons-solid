import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c3130g5rm.css';
import '../../css/b/bngoebbgw.css';
import '../../css/p/pobm81dqh.css';
import '../../css/s/sm3vqcchv.css';
import '../../css/z/zunkvab2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c3130g5rm"/><path class="bngoebbgw"/><path class="pobm81dqh"/><path class="sm3vqcchv"/><path class="zunkvab2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:gymnastics-acrobatic-1"} {...others} />);
}

export default Component;
