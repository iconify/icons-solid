import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svknz3bwq.css';
import '../../css/n/npr06hbbs.css';
import '../../css/b/bek0hpq9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="svknz3bwq"/><path class="npr06hbbs"/><path class="bek0hpq9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:fish"} {...others} />);
}

export default Component;
