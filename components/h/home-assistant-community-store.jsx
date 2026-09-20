import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ml9tklbna.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ml9tklbna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:home-assistant-community-store"} {...others} />);
}

export default Component;
