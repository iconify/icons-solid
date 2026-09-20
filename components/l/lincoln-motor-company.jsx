import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d647met_t.css';
import '../../css/j/ja7t5qg0p.css';

const viewBox = {"width":800,"height":208};
const content = `<path class="d647met_t"/><path class="ja7t5qg0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lincoln-motor-company"} {...others} />);
}

export default Component;
