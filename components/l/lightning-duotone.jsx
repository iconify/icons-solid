import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eaz5-59jw.css';
import '../../css/v/vo7nxtf0p.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGDEO4Qc9R"><g class="ft5dv1b6b"><path class="eaz5-59jw"/><path class="vo7nxtf0p"/></g></mask></defs><path mask="url(#SVGDEO4Qc9R)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:lightning-duotone"} {...others} />);
}

export default Component;
