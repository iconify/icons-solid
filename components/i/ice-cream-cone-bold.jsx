import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gr7tf6sse.css';
import '../../css/t/tf3fnbb4q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gr7tf6sse"/><path class="tf3fnbb4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:ice-cream-cone-bold"} {...others} />);
}

export default Component;
