import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ck12p5bii.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ck12p5bii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:numbers-09-sort-ascending-fill"} {...others} />);
}

export default Component;
