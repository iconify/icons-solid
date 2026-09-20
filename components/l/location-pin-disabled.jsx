import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qnhteeo2t.css';
import '../../css/t/tadluznmw.css';
import '../../css/k/k0iu2bsiw.css';
import '../../css/w/wb_85nb1u.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="qnhteeo2t"/><path class="tadluznmw"/><path class="k0iu2bsiw"/><path class="wb_85nb1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:location-pin-disabled"} {...others} />);
}

export default Component;
