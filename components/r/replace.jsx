import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vsir0k33t.css';
import '../../css/a/a-salgpgm.css';
import '../../css/v/velahuttd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vsir0k33t"/><path class="a-salgpgm"/><rect class="velahuttd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:replace"} {...others} />);
}

export default Component;
