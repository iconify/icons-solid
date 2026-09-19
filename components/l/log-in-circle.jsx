import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lgj9wvwbi.css';
import '../../css/t/tvkysof6t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lgj9wvwbi"/><path class="tvkysof6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:log-in-circle"} {...others} />);
}

export default Component;
