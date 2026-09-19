import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clh07fbwo.css';
import '../../css/h/hhq74abkp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="clh07fbwo"/><rect class="hhq74abkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:horizontal-spacing-filled"} {...others} />);
}

export default Component;
