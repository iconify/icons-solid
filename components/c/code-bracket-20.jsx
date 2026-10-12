import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy7ws3bbg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gy7ws3bbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:code-bracket-20"} {...others} />);
}

export default Component;
