import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m640zw-kt.css';
import '../../css/h/h4318abpg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m640zw-kt"/><path class="h4318abpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:ballotboxboldcheck"} {...others} />);
}

export default Component;
