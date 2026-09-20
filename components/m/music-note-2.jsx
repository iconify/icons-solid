import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egd6s5b0c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="egd6s5b0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:music-note-2"} {...others} />);
}

export default Component;
