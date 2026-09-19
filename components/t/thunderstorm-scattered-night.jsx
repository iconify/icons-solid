import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wg1m4vb6k.css';
import '../../css/o/ovova4bys.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wg1m4vb6k"/><path class="ovova4bys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:thunderstorm-scattered-night"} {...others} />);
}

export default Component;
