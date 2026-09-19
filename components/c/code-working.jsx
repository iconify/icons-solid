import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgrlo48fn.css';
import '../../css/b/b-r1xf_2r.css';
import '../../css/x/x9trttupz.css';
import '../../css/s/si-h3sona.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="fgrlo48fn"/><circle class="b-r1xf_2r"/><circle class="x9trttupz"/><path class="si-h3sona"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:code-working"} {...others} />);
}

export default Component;
