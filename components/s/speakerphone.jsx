import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6v5jeb-g.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="t6v5jeb-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:speakerphone"} {...others} />);
}

export default Component;
