import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/v/vqdcd3pft.css';
import '../../css/k/kgzhjjbev.css';
import '../../css/c/cyqogbbmg.css';
import '../../css/m/mkc7-9b1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="vqdcd3pft"/><path class="kgzhjjbev"/><path class="cyqogbbmg"/><path class="mkc7-9b1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:contact-book"} {...others} />);
}

export default Component;
