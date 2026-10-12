import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bz9b-3b4c.css';
import '../../css/f/fh-ustbyj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bz9b-3b4c"/><path class="fh-ustbyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-check-2-filled"} {...others} />);
}

export default Component;
