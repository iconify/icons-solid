import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dv1b1wt7j.css';
import '../../css/h/hb1iu0uss.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dv1b1wt7j"/><path class="hb1iu0uss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:notebook-pen-filled"} {...others} />);
}

export default Component;
