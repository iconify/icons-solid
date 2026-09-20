import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qb8e2pbvs.css';
import '../../css/a/a6q6jbntf.css';
import '../../css/a/avibf5j5z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qb8e2pbvs"/><path class="a6q6jbntf"/><path class="avibf5j5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:vite"} {...others} />);
}

export default Component;
