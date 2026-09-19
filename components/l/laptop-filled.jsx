import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzh5qzj1y.css';
import '../../css/k/knqltxb3q.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="bzh5qzj1y"/><path class="knqltxb3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:laptop-filled"} {...others} />);
}

export default Component;
