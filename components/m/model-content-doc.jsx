import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6ajanxdn.css';
import '../../css/b/b1_a9z27d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f6ajanxdn"/><path class="b1_a9z27d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:model-content-doc"} {...others} />);
}

export default Component;
