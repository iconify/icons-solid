import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x19w_acyj.css';
import '../../css/v/vpd7rkvil.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x19w_acyj"/><path class="vpd7rkvil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:medical-mask"} {...others} />);
}

export default Component;
