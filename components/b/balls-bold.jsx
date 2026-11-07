import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5i5-fraq.css';
import '../../css/j/jurxy_blt.css';
import '../../css/n/na0l7yy-c.css';
import '../../css/u/udh7ivb4n.css';
import '../../css/z/zrjxdfbje.css';
import '../../css/r/rm2mun58o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p5i5-fraq"/><path clip-rule="evenodd" class="jurxy_blt"/><path class="na0l7yy-c"/><path class="udh7ivb4n"/><path class="zrjxdfbje"/><path class="rm2mun58o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:balls-bold"} {...others} />);
}

export default Component;
