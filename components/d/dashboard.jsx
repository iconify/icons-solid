import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mszzedjss.css';
import '../../css/s/s5a196bgw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mszzedjss"/><path class="s5a196bgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:dashboard"} {...others} />);
}

export default Component;
