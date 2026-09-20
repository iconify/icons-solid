import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lhkxwob5t.css';
import '../../css/e/eg4amjl6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lhkxwob5t"/><path class="eg4amjl6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-heart"} {...others} />);
}

export default Component;
