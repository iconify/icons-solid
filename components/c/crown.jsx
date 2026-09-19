import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cru_83b9u.css';
import '../../css/s/sg6gykbgm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cru_83b9u"/><path class="sg6gykbgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:crown"} {...others} />);
}

export default Component;
