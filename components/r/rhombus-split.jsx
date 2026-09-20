import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pus5ae97y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pus5ae97y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:rhombus-split"} {...others} />);
}

export default Component;
