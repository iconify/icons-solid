import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6t1okvbu.css';
import '../../css/w/wknodb7mp.css';
import '../../css/h/h-9qdj1gj.css';
import '../../css/z/zfijvfb4c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z6t1okvbu"/><path class="wknodb7mp"/><path class="h-9qdj1gj"/><path class="zfijvfb4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:growth-48-bold"} {...others} />);
}

export default Component;
