import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/juolcjavn.css';
import '../../css/i/i4kly5b8q.css';
import '../../css/l/laly9hbhu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="juolcjavn"/><path class="i4kly5b8q"/><path class="laly9hbhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-line-duotone"} {...others} />);
}

export default Component;
