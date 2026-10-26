import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3cxm91zu.css';
import '../../css/a/a_eyrr9hx.css';
import '../../css/v/vixh94iqf.css';
import '../../css/b/bdwo6acak.css';
import '../../css/g/g018e2xmc.css';

const viewBox = {"width":905,"height":822};
const content = `<path class="y3cxm91zu"/><path class="a_eyrr9hx"/><path class="vixh94iqf"/><path class="bdwo6acak"/><path class="g018e2xmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:opencost"} {...others} />);
}

export default Component;
