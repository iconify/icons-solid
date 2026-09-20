import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/isarv1pye.css';
import '../../css/t/twfn4lxjv.css';
import '../../css/e/eya-shbjw.css';
import '../../css/f/fpw3n5gpe.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="isarv1pye"/><path class="twfn4lxjv"/><path class="eya-shbjw"/><path class="fpw3n5gpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:calculator-1-flat"} {...others} />);
}

export default Component;
