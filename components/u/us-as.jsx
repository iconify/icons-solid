import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/n/n4q3579np.css';
import '../../css/c/c2d8dlb9m.css';
import '../../css/p/p8rswpbhk.css';
import '../../css/n/n0kma69zb.css';
import '../../css/i/i8dwev7ug.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="n4q3579np"/><path class="c2d8dlb9m"/><path class="p8rswpbhk"/><path class="n0kma69zb"/><path class="i8dwev7ug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:us-as"} {...others} />);
}

export default Component;
