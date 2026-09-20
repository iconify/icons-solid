import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r6cc3pb_a.css';
import '../../css/x/xsn9nsanb.css';
import '../../css/a/aefmnnbnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r6cc3pb_a"/><path class="xsn9nsanb"/><path class="aefmnnbnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:traffic-light-duotone"} {...others} />);
}

export default Component;
