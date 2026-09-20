import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mo-q_sb2f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mo-q_sb2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:play-card-2-filled"} {...others} />);
}

export default Component;
