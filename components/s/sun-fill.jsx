import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jyxt6r5xk.css';
import '../../css/e/ez46996cd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jyxt6r5xk"/><path class="ez46996cd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sun-fill"} {...others} />);
}

export default Component;
