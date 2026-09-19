import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/taiu1gb2y.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="taiu1gb2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:suse"} {...others} />);
}

export default Component;
