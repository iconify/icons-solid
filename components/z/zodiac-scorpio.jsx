import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x52-kbbea.css';
import '../../css/u/um2qbccay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x52-kbbea"/><path class="um2qbccay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:zodiac-scorpio"} {...others} />);
}

export default Component;
