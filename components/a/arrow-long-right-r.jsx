import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjg90-bbu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wjg90-bbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:arrow-long-right-r"} {...others} />);
}

export default Component;
