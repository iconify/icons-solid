import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ej4e03boz.css';
import '../../css/p/peoqhybmg.css';
import '../../css/e/ex0yribym.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ej4e03boz"/><path class="peoqhybmg"/><path class="ex0yribym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:desk-lamp-20-bold"} {...others} />);
}

export default Component;
