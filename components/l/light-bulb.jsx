import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uayh04bgf.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="uayh04bgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:light-bulb"} {...others} />);
}

export default Component;
