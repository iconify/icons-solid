import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fco0k73cz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fco0k73cz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:cleaning-room-woman-solid"} {...others} />);
}

export default Component;
