import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6d250bwp.css';
import '../../css/e/ewabd3k5e.css';
import '../../css/s/s3imwknyq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j6d250bwp"/><path class="ewabd3k5e"/><path clip-rule="evenodd" class="s3imwknyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-cross-rounded-outline"} {...others} />);
}

export default Component;
