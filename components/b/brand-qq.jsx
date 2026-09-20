import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ekztjp1aw.css';
import '../../css/a/a7muj-z5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ekztjp1aw"/><path class="a7muj-z5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-qq"} {...others} />);
}

export default Component;
