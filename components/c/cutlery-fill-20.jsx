import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8wh20b4s.css';
import '../../css/t/tatmy1kfy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s8wh20b4s"/><path class="tatmy1kfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:cutlery-fill-20"} {...others} />);
}

export default Component;
