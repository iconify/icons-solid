import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o58hkebvg.css';
import '../../css/p/pnekmprlh.css';
import '../../css/s/s984uab_t.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG6nQl3b2l"><g class="o58hkebvg"><path class="pnekmprlh"/><path class="s984uab_t"/></g></mask></defs><path mask="url(#SVG6nQl3b2l)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:ring-duotone-line"} {...others} />);
}

export default Component;
