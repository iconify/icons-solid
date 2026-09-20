import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npa5ly1qf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="npa5ly1qf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-bunpo"} {...others} />);
}

export default Component;
