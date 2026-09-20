import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyymi3ddh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xyymi3ddh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:attribution-solid"} {...others} />);
}

export default Component;
