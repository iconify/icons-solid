import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdv3zhb8w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pdv3zhb8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:bookmark-minus"} {...others} />);
}

export default Component;
