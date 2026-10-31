import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jr8ohcc6r.css';
import '../../css/t/t39v8hihk.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="jr8ohcc6r"/><path class="t39v8hihk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:indonesia"} {...others} />);
}

export default Component;
