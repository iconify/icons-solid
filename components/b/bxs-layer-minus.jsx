import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kr1oq5bin.css';
import '../../css/u/uybrlibii.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kr1oq5bin"/><path class="uybrlibii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-layer-minus"} {...others} />);
}

export default Component;
