import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2ru_1ven.css';
import '../../css/c/cpjb_5hdh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a2ru_1ven"/><path class="cpjb_5hdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:location-fill"} {...others} />);
}

export default Component;
