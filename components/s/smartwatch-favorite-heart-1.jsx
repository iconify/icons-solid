import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-v3klfva.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jcwxwy-nd.css';
import '../../css/a/a6vf9xbmg.css';
import '../../css/q/qiwdw3hyp.css';
import '../../css/q/q8r6zbb2v.css';
import '../../css/c/c-zrgpb5l.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGFziercDW" class="t-v3klfva"/></defs><g class="ft5dv1b6b"><path class="jcwxwy-nd"/><path class="a6vf9xbmg"/><path class="qiwdw3hyp"/><path class="q8r6zbb2v"/><use href="#SVGFziercDW" class="c-zrgpb5l"/><use href="#SVGFziercDW" class="c-zrgpb5l"/><use href="#SVGFziercDW" class="c-zrgpb5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:smartwatch-favorite-heart-1"} {...others} />);
}

export default Component;
