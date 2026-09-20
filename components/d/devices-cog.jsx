import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xkajaqb1f.css';
import '../../css/c/c56bf993u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xkajaqb1f"/><path class="c56bf993u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:devices-cog"} {...others} />);
}

export default Component;
