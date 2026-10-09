import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nf9mlfk3q.css';
import '../../css/t/tqy8z_h5z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nf9mlfk3q"/><path class="tqy8z_h5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:git-commit-48-bold"} {...others} />);
}

export default Component;
