import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/huersmbrs.css';
import '../../css/y/ydb89tdze.css';
import '../../css/c/cw9woomrs.css';
import '../../css/r/rx31uvbxr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="huersmbrs"/><path class="ydb89tdze"/><path class="cw9woomrs"/><path class="rx31uvbxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:snowflake-20-bold"} {...others} />);
}

export default Component;
