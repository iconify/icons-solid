import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/elmahibhz.css';
import '../../css/b/bv0zn2b4a.css';
import '../../css/n/nwos94z9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="elmahibhz"/><path class="bv0zn2b4a"/><path class="nwos94z9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:nfc"} {...others} />);
}

export default Component;
