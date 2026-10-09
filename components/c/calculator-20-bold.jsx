import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pp1n75bba.css';
import '../../css/o/osbs8kx0d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pp1n75bba"/><path class="osbs8kx0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calculator-20-bold"} {...others} />);
}

export default Component;
