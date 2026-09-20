import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgae07xbo.css';
import '../../css/r/rr7ezt0es.css';
import '../../css/x/xfjodpqdj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pgae07xbo"/><path class="rr7ezt0es"/><path class="xfjodpqdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:relativity-filled"} {...others} />);
}

export default Component;
