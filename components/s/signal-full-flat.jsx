import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymsx6qb8v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ymsx6qb8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:signal-full-flat"} {...others} />);
}

export default Component;
