import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkxm5ccrh.css';
import '../../css/v/vsj2klbek.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lkxm5ccrh"/><path class="vsj2klbek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:nsfw"} {...others} />);
}

export default Component;
