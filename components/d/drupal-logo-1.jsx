import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/e/enyr3comf.css';
import '../../css/j/jg5rodh3q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="enyr3comf"/><path class="jg5rodh3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:drupal-logo-1"} {...others} />);
}

export default Component;
