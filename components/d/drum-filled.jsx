import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7o7vzk5e.css';
import '../../css/j/j-89n_bzw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j7o7vzk5e"/><path class="j-89n_bzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:drum-filled"} {...others} />);
}

export default Component;
