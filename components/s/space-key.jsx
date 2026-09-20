import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axowgr_jg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="axowgr_jg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:space-key"} {...others} />);
}

export default Component;
