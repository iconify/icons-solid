import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtt8x7bbt.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-5.5};
const content = `<path class="gtt8x7bbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:google-plus"} {...others} />);
}

export default Component;
