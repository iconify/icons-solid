import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/of8voccif.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="of8voccif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:font"} {...others} />);
}

export default Component;
