import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvn40n5nl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uvn40n5nl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:xiaomi-mimo"} {...others} />);
}

export default Component;
