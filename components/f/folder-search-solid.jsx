import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/klk01p-xy.css';
import '../../css/l/lsqc0acbg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="klk01p-xy"/><path clip-rule="evenodd" class="lsqc0acbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:folder-search-solid"} {...others} />);
}

export default Component;
