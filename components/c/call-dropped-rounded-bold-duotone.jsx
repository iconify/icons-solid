import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi6qtibex.css';
import '../../css/s/s02o69bfv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fi6qtibex"/><path class="s02o69bfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:call-dropped-rounded-bold-duotone"} {...others} />);
}

export default Component;
