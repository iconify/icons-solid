import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di0sukb5w.css';
import '../../css/h/ho6ftnbun.css';
import '../../css/p/pembsco1c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="di0sukb5w"/><path class="ho6ftnbun"/><path class="pembsco1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:radio-tower-filled"} {...others} />);
}

export default Component;
