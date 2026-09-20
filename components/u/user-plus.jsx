import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az7rfoxnk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="az7rfoxnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:user-plus"} {...others} />);
}

export default Component;
