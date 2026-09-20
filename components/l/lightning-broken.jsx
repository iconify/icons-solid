import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gwa14955r.css';
import '../../css/a/a0gtrrbuj.css';
import '../../css/l/l55ao_bqb.css';
import '../../css/u/u731zeots.css';
import '../../css/k/kv9osebmj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gwa14955r"/><path class="a0gtrrbuj"/><path class="l55ao_bqb"/><path class="u731zeots"/><path class="kv9osebmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lightning-broken"} {...others} />);
}

export default Component;
