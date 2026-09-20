import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbk7imy3h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mbk7imy3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:bell-set-timer-remix"} {...others} />);
}

export default Component;
