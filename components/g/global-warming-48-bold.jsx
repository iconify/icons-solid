import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx-xmmb2t.css';
import '../../css/o/ohm3jmbqg.css';
import '../../css/m/mzottzalv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nx-xmmb2t"/><path class="ohm3jmbqg"/><path class="mzottzalv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:global-warming-48-bold"} {...others} />);
}

export default Component;
