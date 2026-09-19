import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgy83lbvc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sgy83lbvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:quote-single-right-filled"} {...others} />);
}

export default Component;
