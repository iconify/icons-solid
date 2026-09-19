import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1gf3kb7k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k1gf3kb7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:envelope-open-outline"} {...others} />);
}

export default Component;
