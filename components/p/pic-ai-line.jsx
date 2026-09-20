import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p068o5acv.css';
import '../../css/s/sm2nqnaxi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p068o5acv"/><path class="sm2nqnaxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:pic-ai-line"} {...others} />);
}

export default Component;
