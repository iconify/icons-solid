import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bj81zpj-r.css';
import '../../css/n/nm_4mya7e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bj81zpj-r"/><path class="nm_4mya7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:balloon"} {...others} />);
}

export default Component;
