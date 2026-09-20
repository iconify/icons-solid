import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c20ejs7zg.css';
import '../../css/p/pek1alrpa.css';
import '../../css/e/eysntvwok.css';
import '../../css/l/lyslkqbuz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="c20ejs7zg"/><path class="pek1alrpa"/><path class="eysntvwok"/><path class="lyslkqbuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:running-line-duotone"} {...others} />);
}

export default Component;
