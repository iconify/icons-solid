import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lg8fk_74i.css';
import '../../css/h/hjncjwk0j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lg8fk_74i"/><path clip-rule="evenodd" class="hjncjwk0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mailbox-filled"} {...others} />);
}

export default Component;
