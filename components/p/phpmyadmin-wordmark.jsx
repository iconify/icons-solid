import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bd56e7efs.css';
import '../../css/g/gt5vq3bem.css';
import '../../css/k/kmzeb0bzh.css';
import '../../css/h/hfvqa-bro.css';
import '../../css/b/bicpjib-n.css';
import '../../css/e/ec78-xbzc.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="bd56e7efs"/><path class="gt5vq3bem"/><path class="kmzeb0bzh"/><path class="hfvqa-bro"/><path class="bicpjib-n"/><path class="ec78-xbzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:phpmyadmin-wordmark"} {...others} />);
}

export default Component;
