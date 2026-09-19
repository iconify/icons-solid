import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hmhv31bxt.css';
import '../../css/s/slw3rea1g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="briefcase-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="hmhv31bxt"/><path class="slw3rea1g"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:briefcase-outline"} {...others} />);
}

export default Component;
