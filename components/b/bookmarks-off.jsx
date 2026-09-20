import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f5z5fnbmg.css';
import '../../css/d/dry_c2c3c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f5z5fnbmg"/><path class="dry_c2c3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bookmarks-off"} {...others} />);
}

export default Component;
