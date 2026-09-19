import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkwydw92x.css';
import '../../css/g/gc8-4tb2b.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="hkwydw92x"/><path class="gc8-4tb2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:play-square"} {...others} />);
}

export default Component;
