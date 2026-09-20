import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ohybma0or.css';
import '../../css/b/bjy0nab2j.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGjAxQ6d1c"><g class="ft5dv1b6b"><path class="ohybma0or"/><path class="bjy0nab2j"/></g></mask></defs><path mask="url(#SVGjAxQ6d1c)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-up-duotone-line"} {...others} />);
}

export default Component;
