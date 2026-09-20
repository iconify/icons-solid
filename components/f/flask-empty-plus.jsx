import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tf7be2b3j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tf7be2b3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:flask-empty-plus"} {...others} />);
}

export default Component;
