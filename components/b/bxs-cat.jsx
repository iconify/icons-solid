import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4aexd1cu.css';
import '../../css/k/kpl5dzvml.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g4aexd1cu"/><path class="kpl5dzvml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-cat"} {...others} />);
}

export default Component;
