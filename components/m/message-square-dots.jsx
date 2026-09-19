import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6yrju2ef.css';
import '../../css/o/opsksqbxj.css';
import '../../css/v/vn4va-blz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o6yrju2ef"/><circle class="opsksqbxj"/><circle class="vn4va-blz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:message-square-dots"} {...others} />);
}

export default Component;
