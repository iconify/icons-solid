import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/n/nh6wfl.css';
import '../../css/y/ywbs5z.css';
import '../../css/r/rakmch.css';
import '../../css/s/so-to-0.css';
import '../../css/s/so-from-10.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c nh6wfl"/><path class="a0m25c ywbs5z"/><path class="a0m25c rakmch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:coffee"} {...others} />);
}

export default Component;
