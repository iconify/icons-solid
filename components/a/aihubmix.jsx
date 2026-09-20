import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o08a26b7z.css';
import '../../css/j/j-jecncax.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o08a26b7z"/><path clip-rule="evenodd" class="j-jecncax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:aihubmix"} {...others} />);
}

export default Component;
