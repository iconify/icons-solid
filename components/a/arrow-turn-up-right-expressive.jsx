import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/weui-8b0f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="weui-8b0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:arrow-turn-up-right-expressive"} {...others} />);
}

export default Component;
