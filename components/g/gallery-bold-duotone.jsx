import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7jv9kugu.css';
import '../../css/n/nk6ny4bnw.css';
import '../../css/j/j601azbqu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n7jv9kugu"/><path clip-rule="evenodd" class="nk6ny4bnw"/><path class="j601azbqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-bold-duotone"} {...others} />);
}

export default Component;
