import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_2eiab_d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o_2eiab_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:tumblr-square"} {...others} />);
}

export default Component;
