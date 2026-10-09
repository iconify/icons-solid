import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jhlehuybb.css';
import '../../css/z/zjk6qwb9u.css';
import '../../css/f/fkemwws4v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jhlehuybb"/><path class="zjk6qwb9u"/><path class="fkemwws4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:substation-48-bold"} {...others} />);
}

export default Component;
