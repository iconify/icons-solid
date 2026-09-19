import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/efo1t8wme.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="efo1t8wme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:chopsticks-fork"} {...others} />);
}

export default Component;
