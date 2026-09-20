import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fe2kg1trl.css';
import '../../css/i/i9pxxkb7c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fe2kg1trl"/><path class="i9pxxkb7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shopping-bag-search"} {...others} />);
}

export default Component;
