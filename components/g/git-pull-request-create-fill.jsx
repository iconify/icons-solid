import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cp7wuibic.css';
import '../../css/x/xs7teru1d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cp7wuibic"/><path class="xs7teru1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-pull-request-create-fill"} {...others} />);
}

export default Component;
