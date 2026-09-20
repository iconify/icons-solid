import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k6l9xwbnp.css';
import '../../css/c/cf8f9ynoi.css';
import '../../css/h/h1beiq6dv.css';
import '../../css/k/kxshi8bqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="k6l9xwbnp"/><path class="cf8f9ynoi"/><path class="h1beiq6dv"/><path class="kxshi8bqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:loading-browser-bar"} {...others} />);
}

export default Component;
