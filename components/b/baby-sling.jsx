import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/q/qrvninb9k.css';
import '../../css/o/o_77hmb8q.css';
import '../../css/p/plqe-22_l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6WE8ibWe"><g class="rohhhzb0l"><circle class="qrvninb9k"/><path class="o_77hmb8q"/><path class="plqe-22_l"/></g></mask></defs><path mask="url(#SVG6WE8ibWe)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:baby-sling"} {...others} />);
}

export default Component;
