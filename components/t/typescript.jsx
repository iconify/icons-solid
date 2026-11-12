import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9cynrzbj.css';
import '../../css/w/w6sw46v9z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f9cynrzbj"/><path class="w6sw46v9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:typescript"} {...others} />);
}

export default Component;
