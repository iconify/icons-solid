import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/o/og7xrbchw.css';
import '../../css/e/enjtvvbac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="og7xrbchw"/><path class="enjtvvbac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:bag-suitcase-add-plus"} {...others} />);
}

export default Component;
