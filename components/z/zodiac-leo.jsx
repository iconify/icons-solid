import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x4y7dp8ml.css';
import '../../css/n/n4lp0fgkw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x4y7dp8ml"/><circle class="n4lp0fgkw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:zodiac-leo"} {...others} />);
}

export default Component;
