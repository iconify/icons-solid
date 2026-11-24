import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arhhw8bcu.css';
import '../../css/a/aiztnfbpp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="arhhw8bcu"/><path class="aiztnfbpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:circle-fading-play-filled"} {...others} />);
}

export default Component;
