import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g15uk9bud.css';
import '../../css/u/u-p-xwb0a.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g15uk9bud"/><path class="u-p-xwb0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:model-tuned"} {...others} />);
}

export default Component;
