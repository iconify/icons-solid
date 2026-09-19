import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyp2mwbic.css';
import '../../css/j/j8-uowi8q.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/e/esnwcwmxk.css';
import '../../css/j/j91_6f1oz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dyp2mwbic"/><circle class="j8-uowi8q"/><g class="n1mjunbsu"><path class="esnwcwmxk"/><path class="j91_6f1oz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:add-database"} {...others} />);
}

export default Component;
