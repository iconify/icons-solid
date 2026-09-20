import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umfov9uyl.css';
import '../../css/b/bo_y54-xh.css';
import '../../css/q/qyybdwj7c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="umfov9uyl"/><path class="bo_y54-xh"/><path class="qyybdwj7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:music-walkman-cassette"} {...others} />);
}

export default Component;
