import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntqwcibqp.css';
import '../../css/f/fk05w0vld.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ntqwcibqp"/><path class="fk05w0vld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:users-round-filled"} {...others} />);
}

export default Component;
