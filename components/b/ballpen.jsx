import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c5kum6biq.css';
import '../../css/q/q-79sbf5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c5kum6biq"/><path class="q-79sbf5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ballpen"} {...others} />);
}

export default Component;
