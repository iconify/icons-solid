import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8b3c1bgc.css';
import '../../css/m/md2v-t2ws.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="d8b3c1bgc"/><path class="md2v-t2ws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:norfolk-island"} {...others} />);
}

export default Component;
