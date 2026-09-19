import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mq4cs___m.css';
import '../../css/n/nkq7hz70u.css';
import '../../css/e/edrk12x5i.css';
import '../../css/u/umavi9bru.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mq4cs___m"/><path class="nkq7hz70u"/><path class="edrk12x5i"/><path class="umavi9bru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cone-02"} {...others} />);
}

export default Component;
