import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qgafedb3r.css';
import '../../css/g/gvcogmvwd.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGxuwandbd"><g class="ft5dv1b6b"><path class="qgafedb3r"/><path class="gvcogmvwd"/></g></mask></defs><path mask="url(#SVGxuwandbd)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:comment-duotone-line"} {...others} />);
}

export default Component;
