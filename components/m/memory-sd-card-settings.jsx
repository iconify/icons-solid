import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7j3wsbkq.css';
import '../../css/w/wwvgql0gp.css';
import '../../css/f/fup7zrb6t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z7j3wsbkq"/><path class="wwvgql0gp"/><path class="fup7zrb6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:memory-sd-card-settings"} {...others} />);
}

export default Component;
