import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5qmym-cz.css';
import '../../css/i/iln029b4a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r5qmym-cz"/><path clip-rule="evenodd" class="iln029b4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panorama-bold"} {...others} />);
}

export default Component;
