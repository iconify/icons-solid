import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rlxecy5gb.css';
import '../../css/a/al5367bds.css';
import '../../css/h/hcflj6-un.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rlxecy5gb"/><path class="al5367bds"/><path class="hcflj6-un"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:no-photo-taking-zone"} {...others} />);
}

export default Component;
