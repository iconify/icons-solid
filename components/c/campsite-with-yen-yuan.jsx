import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zbkzf60tt.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zbkzf60tt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:campsite-with-yen-yuan"} {...others} />);
}

export default Component;
