import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xd_kjk6cf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xd_kjk6cf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:arrow-up-down-2"} {...others} />);
}

export default Component;
