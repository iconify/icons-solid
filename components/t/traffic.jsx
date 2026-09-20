import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/onebhumps.css';
import '../../css/c/cznw79oxo.css';
import '../../css/l/lm4rjrbve.css';
import '../../css/c/c4i5gvurc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="onebhumps"/><path class="cznw79oxo"/><path class="lm4rjrbve"/><path class="c4i5gvurc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:traffic"} {...others} />);
}

export default Component;
