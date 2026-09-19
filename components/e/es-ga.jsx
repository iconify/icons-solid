import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/j/jgzubvbrf.css';
import '../../css/c/czgk7ibpr.css';
import '../../css/j/jm9rbv43s.css';
import '../../css/c/c0jms3box.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="jgzubvbrf"/><path class="czgk7ibpr"/><path class="jm9rbv43s"/><path class="c0jms3box"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:es-ga"} {...others} />);
}

export default Component;
