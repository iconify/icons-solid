import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_l3vcc7k.css';

const viewBox = {"width":24,"height":24};
const content = `<path vector-effect="non-scaling-stroke" class="a_l3vcc7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:format-outdent-rtl"} {...others} />);
}

export default Component;
