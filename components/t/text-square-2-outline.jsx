import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b53cjslek.css';
import '../../css/k/k_gbamc1v.css';
import '../../css/h/hi8bol3jn.css';
import '../../css/f/fk81ubbzb.css';
import '../../css/u/ucpl_kbnp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b53cjslek"/><path class="k_gbamc1v"/><path class="hi8bol3jn"/><path class="fk81ubbzb"/><path class="ucpl_kbnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-square-2-outline"} {...others} />);
}

export default Component;
