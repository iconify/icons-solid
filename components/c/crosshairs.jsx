import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kiqygcc1r.css';
import '../../css/a/a5ptkn1rg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kiqygcc1r"/><path class="a5ptkn1rg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:crosshairs"} {...others} />);
}

export default Component;
