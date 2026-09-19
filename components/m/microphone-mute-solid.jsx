import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqa3tkb1n.css';
import '../../css/h/hw5sfdxzd.css';
import '../../css/o/od3zj2duq.css';
import '../../css/m/mk8ww2w7h.css';
import '../../css/y/y9fwjubcs.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="hw5sfdxzd"/><path class="od3zj2duq"/><path class="mk8ww2w7h"/><path class="y9fwjubcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:microphone-mute-solid"} {...others} />);
}

export default Component;
