import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/id4air0sa.css';
import '../../css/z/z6k-h7b9c.css';
import '../../css/h/h8c2zibww.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="id4air0sa"/><path class="z6k-h7b9c"/><path class="h8c2zibww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-path-outline"} {...others} />);
}

export default Component;
