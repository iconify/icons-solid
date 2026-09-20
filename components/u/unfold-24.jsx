import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mnghg2bjh.css';
import '../../css/f/f7ef8jq2f.css';
import '../../css/x/xtctq8bmg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mnghg2bjh"/><path class="f7ef8jq2f"/><path class="xtctq8bmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:unfold-24"} {...others} />);
}

export default Component;
