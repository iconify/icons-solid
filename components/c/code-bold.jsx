import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtjzwnbwv.css';
import '../../css/d/dbws_7b9j.css';
import '../../css/l/lyi1fbbsc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gtjzwnbwv"/><path class="dbws_7b9j"/><path class="lyi1fbbsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-bold"} {...others} />);
}

export default Component;
