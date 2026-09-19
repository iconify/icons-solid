import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/fn-t654mq.css';
import '../../css/x/x7sf2z-_n.css';
import '../../css/m/maw6_-12u.css';

const viewBox = {"width":49,"height":48};
const content = `<defs><mask id="SVGarZUzeXi"><g class="aql7dnt-u"><path class="fn-t654mq"/><path class="x7sf2z-_n"/></g></mask></defs><path mask="url(#SVGarZUzeXi)" class="maw6_-12u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:dome-light"} {...others} />);
}

export default Component;
