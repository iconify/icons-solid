import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/enn3tn4xs.css';
import '../../css/w/w-oye57eg.css';
import '../../css/b/b3izabcyh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="enn3tn4xs"/><path class="w-oye57eg"/><path class="b3izabcyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pen-new-round-bold"} {...others} />);
}

export default Component;
