import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o58hkebvg.css';
import '../../css/n/npb8tdb2y.css';
import '../../css/s/s1a18_bhw.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG3pTbVv4N"><g class="o58hkebvg"><path class="npb8tdb2y"/><path class="s1a18_bhw"/></g></mask></defs><path mask="url(#SVG3pTbVv4N)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:direction-alt-duotone-line"} {...others} />);
}

export default Component;
