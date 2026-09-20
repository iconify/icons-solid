import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/i/iylh-sbak.css';
import '../../css/o/ocb1r0bmr.css';
import '../../css/q/qupbt5bgs.css';
import '../../css/s/sbcc1dhrw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path clip-rule="evenodd" class="iylh-sbak"/><path class="ocb1r0bmr"/><path class="qupbt5bgs"/><path class="sbcc1dhrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:label-folder-tag"} {...others} />);
}

export default Component;
