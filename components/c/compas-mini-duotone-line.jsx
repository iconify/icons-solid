import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o58hkebvg.css';
import '../../css/x/xjghu547v.css';
import '../../css/b/btizuutzp.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGfvUskeMK"><g class="o58hkebvg"><path class="xjghu547v"/><circle class="btizuutzp"/></g></mask></defs><path mask="url(#SVGfvUskeMK)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:compas-mini-duotone-line"} {...others} />);
}

export default Component;
