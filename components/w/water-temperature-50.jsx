import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7020zbci.css';

const viewBox = {"width":528,"height":448};
const content = `<path class="d7020zbci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:water-temperature-50"} {...others} />);
}

export default Component;
