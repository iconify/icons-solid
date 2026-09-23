import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gbgah5nkk.css';
import '../../css/h/hhbqq8bea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gbgah5nkk"/><path class="hhbqq8bea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:battery-sparkles-fill"} {...others} />);
}

export default Component;
