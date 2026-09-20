import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi2gs_ofg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hi2gs_ofg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-filled"} {...others} />);
}

export default Component;
