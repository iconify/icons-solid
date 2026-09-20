import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tl30c4zma.css';
import '../../css/n/nm-0yofzq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tl30c4zma"/><path class="nm-0yofzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:city-filled"} {...others} />);
}

export default Component;
