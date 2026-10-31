import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eko1wh1jk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eko1wh1jk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:copy-alt-2-fill-round"} {...others} />);
}

export default Component;
