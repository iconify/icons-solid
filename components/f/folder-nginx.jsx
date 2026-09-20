import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcy98sbxp.css';
import '../../css/q/q6t1v8bmy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kcy98sbxp"/><path class="q6t1v8bmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-nginx"} {...others} />);
}

export default Component;
