import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uonq2q-9z.css';
import '../../css/w/w-n1usl-o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uonq2q-9z"/><path class="w-n1usl-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:deno"} {...others} />);
}

export default Component;
