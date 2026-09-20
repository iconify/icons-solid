import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bnzq4cudj.css';
import '../../css/e/e1zpqvs-y.css';
import '../../css/f/fa-ek3b5p.css';
import '../../css/g/guuxl5byj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="bnzq4cudj"/><path class="e1zpqvs-y"/><path class="fa-ek3b5p"/><path class="guuxl5byj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:color-picker"} {...others} />);
}

export default Component;
