import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgi08m.css';
import '../../css/t/t5pxry.css';
import '../../css/y/y4wbml.css';
import '../../css/z/zxndow.css';
import '../../css/f/fr4-ze.css';
import '../../css/f/fhjy5e.css';
import '../../css/o/oyeo5a.css';
import '../../css/n/njb3_a.css';
import '../../css/b/botfzx.css';
import '../../css/n/n95x5i.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-_-jasl.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGzCuoRcyA"><path class="sgi08m t5pxry y4wbml zxndow"/><path class="fr4-ze t5pxry zxndow"/><path class="fhjy5e t5pxry y4wbml zxndow"/><path class="oyeo5a t5pxry y4wbml zxndow"/><path class="njb3_a"/></mask></defs><path mask="url(#SVGzCuoRcyA)" class="botfzx"/><path class="n95x5i t5pxry y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:file-document-minus"} {...others} />);
}

export default Component;
