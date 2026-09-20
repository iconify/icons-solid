import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgo3yzakc.css';
import '../../css/m/m7lzhdc8k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bgo3yzakc"/><path class="m7lzhdc8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:arrow-up-right"} {...others} />);
}

export default Component;
