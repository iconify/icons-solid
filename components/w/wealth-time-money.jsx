import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/slozidb7w.css';
import '../../css/e/e4-ajioyi.css';
import '../../css/f/fnkn5l_rv.css';
import '../../css/l/lwr3rgbpj.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="slozidb7w"/><path class="e4-ajioyi"/><path class="fnkn5l_rv"/><path class="lwr3rgbpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:wealth-time-money"} {...others} />);
}

export default Component;
