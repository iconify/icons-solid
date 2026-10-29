import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3pe-ciow.css';
import '../../css/l/lp2eyhbtz.css';
import '../../css/r/reli5ilue.css';
import '../../css/k/krj5u0bml.css';
import '../../css/h/hi5o6vudz.css';
import '../../css/g/g0qrowvmk.css';
import '../../css/a/as3khhbag.css';
import '../../css/i/it8r7tbds.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n3pe-ciow wm-shadow"/><path class="lp2eyhbtz wm-k"/><path class="reli5ilue wm-k"/><path class="krj5u0bml wm-a"/><path class="hi5o6vudz wm-a"/><path class="g0qrowvmk wm-a"/><path class="as3khhbag wm-a"/><path class="it8r7tbds wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:arrow-down-to-line"} {...others} />);
}

export default Component;
