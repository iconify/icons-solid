import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r86gyghte.css';
import '../../css/n/nkn0wyb7u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r86gyghte"/><path class="nkn0wyb7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:radiation-48-bold"} {...others} />);
}

export default Component;
