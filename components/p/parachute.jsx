import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bsd2bnb_a.css';
import '../../css/p/prv9iumsv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bsd2bnb_a"/><path class="prv9iumsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:parachute"} {...others} />);
}

export default Component;
