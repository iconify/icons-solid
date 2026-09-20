import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi5j1db3c.css';
import '../../css/p/pgxnyljae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bi5j1db3c"/><path class="pgxnyljae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:vllm"} {...others} />);
}

export default Component;
