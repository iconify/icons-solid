import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g7k409bhs.css';
import '../../css/n/nqbip7m1a.css';
import '../../css/h/hbl-7rbdf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="g7k409bhs"/><path class="nqbip7m1a"/><path class="hbl-7rbdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hot-tube"} {...others} />);
}

export default Component;
