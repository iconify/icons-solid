import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6p9yrlgi.css';
import '../../css/q/qhp5hjzez.css';
import '../../css/j/jt8rybcvz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h6p9yrlgi"/><path class="qhp5hjzez"/><path class="jt8rybcvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:chain-20"} {...others} />);
}

export default Component;
