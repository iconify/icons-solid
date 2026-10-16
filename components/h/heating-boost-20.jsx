import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eiojdmbqv.css';
import '../../css/q/q24vj1lah.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eiojdmbqv"/><path class="q24vj1lah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heating-boost-20"} {...others} />);
}

export default Component;
