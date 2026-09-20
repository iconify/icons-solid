import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adqbg89ic.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="adqbg89ic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:loop-left-ai-line"} {...others} />);
}

export default Component;
