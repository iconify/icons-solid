import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_mrlqbtl.css';
import '../../css/o/om6kf4uvp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t_mrlqbtl"/><path class="om6kf4uvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:arrow-up"} {...others} />);
}

export default Component;
