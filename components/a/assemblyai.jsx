import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o50glqbqr.css';
import '../../css/z/zglupmbmy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o50glqbqr"/><path class="zglupmbmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:assemblyai"} {...others} />);
}

export default Component;
