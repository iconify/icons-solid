import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/x/x0ejb5i8x.css';
import '../../css/t/tlrka-bsb.css';
import '../../css/p/pj_7kk18u.css';
import '../../css/r/r7vb4filw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="x0ejb5i8x"/><path class="tlrka-bsb"/><path class="pj_7kk18u"/><path class="r7vb4filw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:user-feedback-heart"} {...others} />);
}

export default Component;
