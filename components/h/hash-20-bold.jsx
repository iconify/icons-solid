import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvx3ydb_k.css';
import '../../css/n/nov116bwc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nvx3ydb_k"/><path class="nov116bwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hash-20-bold"} {...others} />);
}

export default Component;
