import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyp2mwbic.css';
import '../../css/j/j8-uowi8q.css';
import '../../css/j/jc2shdofb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dyp2mwbic"/><circle class="j8-uowi8q"/><path class="jc2shdofb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:accept-database"} {...others} />);
}

export default Component;
