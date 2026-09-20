import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ljfj6lbfj.css';
import '../../css/i/i9b2jnbrw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ljfj6lbfj"/><path class="i9b2jnbrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:flower-off"} {...others} />);
}

export default Component;
