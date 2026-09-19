import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xesjvgb7x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xesjvgb7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:settings-filled"} {...others} />);
}

export default Component;
