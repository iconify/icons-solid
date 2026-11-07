import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6d250bwp.css';
import '../../css/e/e6101wj0a.css';
import '../../css/h/hlvhjsz4e.css';
import '../../css/d/dg1k72fde.css';
import '../../css/s/se0dh3dto.css';
import '../../css/z/zno4v69ad.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j6d250bwp"/><path class="e6101wj0a"/><path class="hlvhjsz4e"/><path clip-rule="evenodd" class="dg1k72fde"/><path class="se0dh3dto"/><path class="zno4v69ad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:users-group-two-rounded-outline"} {...others} />);
}

export default Component;
