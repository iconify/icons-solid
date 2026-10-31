import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tu-yry1nz.css';
import '../../css/g/go5cygdbc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tu-yry1nz"/><path clip-rule="evenodd" class="go5cygdbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:circle-letter-r-filled"} {...others} />);
}

export default Component;
