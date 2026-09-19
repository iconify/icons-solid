import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nwup8u09h.css';
import '../../css/f/folh-y6em.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="nwup8u09h"/><path class="folh-y6em"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:greek-helmet"} {...others} />);
}

export default Component;
