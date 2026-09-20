import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ruqy2nb-z.css';
import '../../css/y/yg1-m40zm.css';
import '../../css/s/s8rs66b6c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ruqy2nb-z"/><path class="yg1-m40zm"/><path class="s8rs66b6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:modern-music-dj-bold"} {...others} />);
}

export default Component;
