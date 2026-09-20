import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n08u8g0bs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n08u8g0bs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:grapheneos"} {...others} />);
}

export default Component;
