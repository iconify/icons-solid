import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ch54c-bxk.css';
import '../../css/x/xujwraclm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ch54c-bxk"/><path class="xujwraclm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:groceries"} {...others} />);
}

export default Component;
