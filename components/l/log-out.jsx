import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/y/yo13rm.css';
import '../../css/w/w90myk.css';
import '../../css/v/vusf7y.css';
import '../../css/s/so-from-46.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c yo13rm"/><path class="a0m25c w90myk"/><path class="a0m25c vusf7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:log-out"} {...others} />);
}

export default Component;
