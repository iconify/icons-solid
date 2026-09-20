import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3q3ev6-g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b3q3ev6-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:meter-gas"} {...others} />);
}

export default Component;
