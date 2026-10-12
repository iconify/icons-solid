import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltayglbep.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ltayglbep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-slash-filled"} {...others} />);
}

export default Component;
