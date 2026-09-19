import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-6xlxb5c.css';

const viewBox = {"width":32,"height":24};
const content = `<path class="n-6xlxb5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:backward"} {...others} />);
}

export default Component;
