import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t3_l9ubrw.css';
import '../../css/b/b0caljujn.css';
import '../../css/b/br6u71brj.css';
import '../../css/o/ons53cb4g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="t3_l9ubrw"/><path class="b0caljujn"/><path class="br6u71brj"/><circle class="ons53cb4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:soda-can"} {...others} />);
}

export default Component;
