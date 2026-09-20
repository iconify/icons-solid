import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/r/rfiktw.css';
import '../../css/y/yi3myz.css';
import '../../css/g/gjd-ug.css';
import '../../css/s/so-from-10.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c rfiktw"/><path class="a0m25c yi3myz"/><path class="a0m25c gjd-ug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:chevron-small-triple-down"} {...others} />);
}

export default Component;
