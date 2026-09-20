import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_ww1b5bt.css';
import '../../css/j/jzfr30_8j.css';
import '../../css/o/o-vyhsb3e.css';
import '../../css/p/pn-1l3b2w.css';
import '../../css/v/veq-9ejzg.css';
import '../../css/j/jn06in7ce.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="h_ww1b5bt"/><path class="jzfr30_8j"/><path class="o-vyhsb3e"/><circle class="pn-1l3b2w"/><circle class="veq-9ejzg"/><path class="jn06in7ce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pickle"} {...others} />);
}

export default Component;
