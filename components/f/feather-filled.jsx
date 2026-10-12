import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgjuh8b2j.css';
import '../../css/z/zqpq1rb6d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sgjuh8b2j"/><path class="zqpq1rb6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:feather-filled"} {...others} />);
}

export default Component;
