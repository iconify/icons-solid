import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zqk-lo6pz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zqk-lo6pz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:airbnb"} {...others} />);
}

export default Component;
