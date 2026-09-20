import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cf7arub8r.css';
import '../../css/z/zeiltf4np.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cf7arub8r"/><path class="zeiltf4np"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:users-two-tone"} {...others} />);
}

export default Component;
