import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftv_mlbiu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ftv_mlbiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:npm-variant"} {...others} />);
}

export default Component;
