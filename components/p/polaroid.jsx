import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fmm21sp8m.css';
import '../../css/n/ndb_4g3uw.css';
import '../../css/k/k9xpz9m6j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fmm21sp8m"/><path class="ndb_4g3uw"/><path class="k9xpz9m6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:polaroid"} {...others} />);
}

export default Component;
