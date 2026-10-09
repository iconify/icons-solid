import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7kleu9_v.css';
import '../../css/m/mn53fqbfv.css';
import '../../css/u/ulvulp3em.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l7kleu9_v"/><path class="mn53fqbfv"/><path class="ulvulp3em"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flower-48-bold"} {...others} />);
}

export default Component;
