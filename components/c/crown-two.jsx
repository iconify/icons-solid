import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adexpl72i.css';
import '../../css/g/geju8gabu.css';
import '../../css/h/hj_ooobll.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG1ysxJe8T"><g class="adexpl72i"><path class="geju8gabu"/><path class="hj_ooobll"/></g></mask></defs><path mask="url(#SVG1ysxJe8T)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:crown-two"} {...others} />);
}

export default Component;
