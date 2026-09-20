import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rxaj1_jii.css';
import '../../css/n/nbccev4pn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rxaj1_jii"/><path class="nbccev4pn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:circle-check-big"} {...others} />);
}

export default Component;
