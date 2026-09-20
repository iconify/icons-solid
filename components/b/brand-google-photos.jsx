import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fsriohh5q.css';
import '../../css/p/pmgkjxshm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fsriohh5q"/><path class="pmgkjxshm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-google-photos"} {...others} />);
}

export default Component;
