import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7g3dsb1x.css';

const viewBox = {"width":32,"height":32,"left":1};
const content = `<path class="x7g3dsb1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:eop"} {...others} />);
}

export default Component;
