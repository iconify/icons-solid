import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t32cmqbrd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t32cmqbrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:hard-drive-2-fill-2"} {...others} />);
}

export default Component;
