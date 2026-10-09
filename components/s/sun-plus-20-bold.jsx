import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ci7qqaciu.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/e/evw_lacsv.css';
import '../../css/p/prfptqbhf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ci7qqaciu"/><path class="aqsnv9bnd"/><path class="evw_lacsv"/><path class="prfptqbhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sun-plus-20-bold"} {...others} />);
}

export default Component;
