import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c2dvy5bdn.css';
import '../../css/a/avd_n_3jw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c2dvy5bdn"/><path class="avd_n_3jw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:sticker"} {...others} />);
}

export default Component;
