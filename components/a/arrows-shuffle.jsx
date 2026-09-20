import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ex4pajfvq.css';
import '../../css/f/ffjgrbcen.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ex4pajfvq"/><path class="ffjgrbcen"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrows-shuffle"} {...others} />);
}

export default Component;
