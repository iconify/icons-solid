import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bo961jb7c.css';
import '../../css/k/kit0fd8ao.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bo961jb7c"/><path class="kit0fd8ao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:alert-triangle"} {...others} />);
}

export default Component;
