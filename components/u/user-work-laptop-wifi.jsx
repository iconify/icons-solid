import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpx-ieb2h.css';
import '../../css/k/k2u665ban.css';
import '../../css/z/zygnjqb0c.css';
import '../../css/w/w-rhorbdw.css';
import '../../css/r/rtlqq1a9j.css';
import '../../css/k/kpyax-tvp.css';
import '../../css/h/h0toy4b2m.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGiq99UccS" class="wpx-ieb2h"/></defs><g class="k2u665ban"><path class="zygnjqb0c"/><path class="w-rhorbdw"/><use href="#SVGiq99UccS"/><use href="#SVGiq99UccS"/><path class="rtlqq1a9j"/><path class="kpyax-tvp"/><path class="h0toy4b2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:user-work-laptop-wifi"} {...others} />);
}

export default Component;
