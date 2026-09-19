import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzdt1ttbh.css';
import '../../css/i/i54cwlb3q.css';
import '../../css/p/p0o3chmxj.css';
import '../../css/n/n2nb_4gbg.css';
import '../../css/t/tsspwqbha.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="jzdt1ttbh"/><path class="i54cwlb3q"/><path class="p0o3chmxj"/><path class="n2nb_4gbg"/><path class="tsspwqbha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:yii-wordmark"} {...others} />);
}

export default Component;
