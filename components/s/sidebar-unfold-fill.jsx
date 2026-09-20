import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr5oj0o0b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pr5oj0o0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:sidebar-unfold-fill"} {...others} />);
}

export default Component;
