import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jfr6wqbhu.css';
import '../../css/l/l78icwe5e.css';
import '../../css/y/yny8akbhl.css';
import '../../css/b/bni_uwkle.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="jfr6wqbhu"/><rect class="l78icwe5e"/><rect class="yny8akbhl"/><path class="bni_uwkle"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:qrcode"} {...others} />);
}

export default Component;
