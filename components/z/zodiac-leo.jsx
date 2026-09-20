import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/avyze60iz.css';
import '../../css/t/tpz-0f0vd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="avyze60iz"/><path class="tpz-0f0vd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:zodiac-leo"} {...others} />);
}

export default Component;
