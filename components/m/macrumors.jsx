import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b60gkfbaz.css';
import '../../css/g/gswqujbbb.css';
import '../../css/n/ngs8ap7cj.css';
import '../../css/q/qlqbkkclw.css';
import '../../css/v/v6s1k8bkr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b60gkfbaz"/><path class="gswqujbbb"/><path class="ngs8ap7cj"/><path class="qlqbkkclw"/><path class="v6s1k8bkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:macrumors"} {...others} />);
}

export default Component;
