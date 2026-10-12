import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2tm2fu9q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f2tm2fu9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:utensils-crossed-filled"} {...others} />);
}

export default Component;
