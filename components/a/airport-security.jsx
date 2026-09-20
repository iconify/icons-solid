import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/j/jqapdkb6f.css';
import '../../css/t/twww59b2f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="jqapdkb6f"/><path class="twww59b2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:airport-security"} {...others} />);
}

export default Component;
