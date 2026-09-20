import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ci7gq9rvm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ci7gq9rvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:camera-2-ai-fill"} {...others} />);
}

export default Component;
