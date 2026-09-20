import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/at4jamb2a.css';
import '../../css/t/tlmjgjbij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="at4jamb2a"/><path class="tlmjgjbij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:wrap-text"} {...others} />);
}

export default Component;
