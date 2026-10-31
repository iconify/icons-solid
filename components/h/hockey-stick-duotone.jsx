import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytbycmbow.css';
import '../../css/p/pdg9b4a_z.css';
import '../../css/r/rh-4j1bun.css';
import '../../css/u/ubj4yi1zs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ytbycmbow"/><path class="pdg9b4a_z"/><path class="rh-4j1bun"/><path class="ubj4yi1zs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hockey-stick-duotone"} {...others} />);
}

export default Component;
