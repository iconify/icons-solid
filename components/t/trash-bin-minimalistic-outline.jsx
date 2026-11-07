import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdlwsowkl.css';
import '../../css/f/fib6k6-vs.css';
import '../../css/u/u3cpgbbrn.css';
import '../../css/i/ii8sfybxo.css';
import '../../css/j/jks_y-bbw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rdlwsowkl"/><path class="fib6k6-vs"/><path class="u3cpgbbrn"/><path class="ii8sfybxo"/><path class="jks_y-bbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:trash-bin-minimalistic-outline"} {...others} />);
}

export default Component;
