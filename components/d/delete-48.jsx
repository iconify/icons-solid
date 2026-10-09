import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uq8p88zgp.css';
import '../../css/f/fxsw1ibsd.css';
import '../../css/y/ye66r86mk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uq8p88zgp"/><path class="fxsw1ibsd"/><path class="ye66r86mk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:delete-48"} {...others} />);
}

export default Component;
