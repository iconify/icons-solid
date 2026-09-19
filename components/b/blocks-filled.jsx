import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v37z0qh7q.css';
import '../../css/h/h-mo3zb6z.css';
import '../../css/i/i_ivz8b-r.css';
import '../../css/u/ut5kdvhli.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v37z0qh7q"/><rect class="h-mo3zb6z"/><rect class="i_ivz8b-r"/><rect class="ut5kdvhli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:blocks-filled"} {...others} />);
}

export default Component;
