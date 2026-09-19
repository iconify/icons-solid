import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xj1s5kodi.css';
import '../../css/r/r2hqg3bup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xj1s5kodi"/><path class="r2hqg3bup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:plant"} {...others} />);
}

export default Component;
