import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n3thf4lgo.css';
import '../../css/q/q_95r-1yu.css';
import '../../css/a/aifw8w1dr.css';
import '../../css/p/pmsh51elu.css';
import '../../css/o/oc20apbyd.css';
import '../../css/s/st7cfbbzr.css';
import '../../css/u/u1xlmob0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="n3thf4lgo wm-shadow"/><path class="q_95r-1yu wm-shadow"/><path class="aifw8w1dr"/><path class="pmsh51elu"/><path class="oc20apbyd"/><path class="st7cfbbzr"/><path class="u1xlmob0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:laddoo"} {...others} />);
}

export default Component;
