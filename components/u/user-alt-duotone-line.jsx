import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o58hkebvg.css';
import '../../css/y/yoqsptb2c.css';
import '../../css/o/of_edpbfj.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGbEN4Lc4P"><g class="o58hkebvg"><circle class="yoqsptb2c"/><path class="of_edpbfj"/></g></mask></defs><path mask="url(#SVGbEN4Lc4P)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:user-alt-duotone-line"} {...others} />);
}

export default Component;
