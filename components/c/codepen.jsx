import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kouw_---f.css';
import '../../css/k/k749kiqke.css';
import '../../css/z/zyodd0blz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kouw_---f"/><path class="k749kiqke"/><path class="zyodd0blz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:codepen"} {...others} />);
}

export default Component;
