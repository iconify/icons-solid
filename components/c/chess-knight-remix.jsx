import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfivj4bdz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sfivj4bdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:chess-knight-remix"} {...others} />);
}

export default Component;
