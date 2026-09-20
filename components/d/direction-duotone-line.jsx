import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o58hkebvg.css';
import '../../css/n/npb8tdb2y.css';
import '../../css/y/ye_02ub4x.css';
import '../../css/l/lz8k0cc0q.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGgDUkKebO"><g class="o58hkebvg"><path class="npb8tdb2y"/><path class="ye_02ub4x"/><path class="lz8k0cc0q"/></g></mask></defs><path mask="url(#SVGgDUkKebO)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:direction-duotone-line"} {...others} />);
}

export default Component;
