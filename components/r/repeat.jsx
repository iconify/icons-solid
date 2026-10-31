import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/h8fn3ebqz.css';
import '../../css/a/a5av5abdy.css';
import '../../css/h/hpztoy_nb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="h8fn3ebqz wm-shadow"/><path class="a5av5abdy wm-shadow"/><path class="hpztoy_nb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:repeat"} {...others} />);
}

export default Component;
