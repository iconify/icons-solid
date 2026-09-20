import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/slmw7ib8v.css';
import '../../css/v/v9jq5md0e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="slmw7ib8v"/><path class="v9jq5md0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:book-download"} {...others} />);
}

export default Component;
