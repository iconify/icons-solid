import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/og-t-ob6a.css';
import '../../css/z/zvp4gxblo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="og-t-ob6a"/><path class="zvp4gxblo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:signin"} {...others} />);
}

export default Component;
