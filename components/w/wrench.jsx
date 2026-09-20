import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqay7ob1p.css';
import '../../css/r/rs_g1igkr.css';
import '../../css/h/hkaof2wbu.css';
import '../../css/b/b457pmy8i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kqay7ob1p"/><path class="rs_g1igkr"/><path class="hkaof2wbu"/><path class="b457pmy8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:wrench"} {...others} />);
}

export default Component;
