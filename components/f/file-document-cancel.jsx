import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgi08m.css';
import '../../css/t/t5pxry.css';
import '../../css/y/y4wbml.css';
import '../../css/z/zxndow.css';
import '../../css/f/fr4-ze.css';
import '../../css/f/fhjy5e.css';
import '../../css/o/oyeo5a.css';
import '../../css/n/nwy65s.css';
import '../../css/b/botfzx.css';
import '../../css/r/rq9b1z.css';
import '../../css/s/s8e22g.css';
import '../../css/l/lb7yev.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-_-jasl.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGNqeDmbyg"><path class="sgi08m t5pxry y4wbml zxndow"/><path class="fr4-ze t5pxry zxndow"/><path class="fhjy5e t5pxry y4wbml zxndow"/><path class="oyeo5a t5pxry y4wbml zxndow"/><path class="nwy65s"/></mask></defs><path mask="url(#SVGNqeDmbyg)" class="botfzx"/><path class="rq9b1z s8e22g t5pxry y4wbml"/><path class="lb7yev s8e22g t5pxry y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:file-document-cancel"} {...others} />);
}

export default Component;
