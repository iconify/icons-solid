import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxa5l4b8u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wxa5l4b8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pneumonia-24px"} {...others} />);
}

export default Component;
