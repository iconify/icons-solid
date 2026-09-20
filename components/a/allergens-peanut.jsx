import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/v/vn1nw6bjf.css';
import '../../css/a/a44s4kdyz.css';
import '../../css/v/vt6jytxlv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="vn1nw6bjf"/><path class="a44s4kdyz"/><path class="vt6jytxlv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:allergens-peanut"} {...others} />);
}

export default Component;
