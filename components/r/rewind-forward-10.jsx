import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a1iby1bis.css';
import '../../css/f/fd0hg_b5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a1iby1bis"/><path class="fd0hg_b5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:rewind-forward-10"} {...others} />);
}

export default Component;
