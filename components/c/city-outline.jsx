import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktsidi8ox.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ktsidi8ox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:city-outline"} {...others} />);
}

export default Component;
