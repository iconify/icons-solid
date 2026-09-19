import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ehw5kccqx.css';
import '../../css/i/irv3-cbsy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ehw5kccqx"/><path class="irv3-cbsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:view-list"} {...others} />);
}

export default Component;
