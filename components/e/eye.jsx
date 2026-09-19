import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ek-ptob2h.css';
import '../../css/v/vvuy5gbwu.css';

const viewBox = {"width":32,"height":24};
const content = `<path class="ek-ptob2h"/><path class="vvuy5gbwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:eye"} {...others} />);
}

export default Component;
