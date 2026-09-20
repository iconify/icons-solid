import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fr8pq4ldz.css';
import '../../css/n/nx5pacs2e.css';
import '../../css/k/k-03aib7l.css';
import '../../css/w/wjfxtcc_c.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fr8pq4ldz"/><path class="nx5pacs2e"/><path class="k-03aib7l"/><path class="wjfxtcc_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:railway-track"} {...others} />);
}

export default Component;
