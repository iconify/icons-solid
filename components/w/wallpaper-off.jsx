import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/ttjhupk7f.css';
import '../../css/p/pu70qibba.css';
import '../../css/c/c_392u7jp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ttjhupk7f"/><path class="pu70qibba"/><path class="c_392u7jp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wallpaper-off"} {...others} />);
}

export default Component;
