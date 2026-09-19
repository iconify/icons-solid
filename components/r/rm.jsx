import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/u/usmbwyqjy.css';
import '../../css/n/nz_rabdja.css';
import '../../css/l/l7ukpk0zz.css';
import '../../css/s/sk-56tbmp.css';
import '../../css/q/qafuu0b7z.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsRm0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsRm0)"><path class="usmbwyqjy"/><path class="nz_rabdja"/><path class="l7ukpk0zz"/><path class="sk-56tbmp"/><path class="qafuu0b7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:rm"} {...others} />);
}

export default Component;
