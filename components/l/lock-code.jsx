import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xbh6muo5t.css';
import '../../css/h/h63eyhbko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xbh6muo5t"/><path class="h63eyhbko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lock-code"} {...others} />);
}

export default Component;
