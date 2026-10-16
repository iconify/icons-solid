import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa8mtjico.css';
import '../../css/x/xs22834vg.css';
import '../../css/v/v4yfn2nbx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pa8mtjico"/><path class="xs22834vg"/><path class="v4yfn2nbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:aluminium-48"} {...others} />);
}

export default Component;
