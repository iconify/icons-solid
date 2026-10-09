import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgv9v9bka.css';
import '../../css/t/t1k7qpc8v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kgv9v9bka"/><path class="t1k7qpc8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sort-desc-48-bold"} {...others} />);
}

export default Component;
