import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/d/diqeztb6w.css';
import '../../css/p/prjwigbsg.css';
import '../../css/z/z19bf84dj.css';
import '../../css/j/jbp6xqbph.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsIlo0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsIlo0)"><path class="diqeztb6w"/><path class="prjwigbsg"/><path class="z19bf84dj"/><path class="jbp6xqbph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ilo"} {...others} />);
}

export default Component;
