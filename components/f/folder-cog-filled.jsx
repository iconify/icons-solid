import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-64gvbsn.css';
import '../../css/p/pb7wd1b-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j-64gvbsn"/><path class="pb7wd1b-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:folder-cog-filled"} {...others} />);
}

export default Component;
