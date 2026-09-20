import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w2l8boi6w.css';
import '../../css/m/m34m27bim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w2l8boi6w"/><path class="m34m27bim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:address-book-off"} {...others} />);
}

export default Component;
