import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/damh3ebto.css';
import '../../css/h/hxxd9_b1b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="damh3ebto"/><path class="hxxd9_b1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:first-aid"} {...others} />);
}

export default Component;
