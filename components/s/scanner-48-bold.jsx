import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bnv4p6ezk.css';
import '../../css/o/orzcsyqzp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bnv4p6ezk"/><path class="orzcsyqzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scanner-48-bold"} {...others} />);
}

export default Component;
