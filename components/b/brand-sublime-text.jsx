import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zr5utj3pr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zr5utj3pr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-sublime-text"} {...others} />);
}

export default Component;
