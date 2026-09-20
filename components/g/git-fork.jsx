import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ox78fq-an.css';
import '../../css/o/o7rls83ym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ox78fq-an"/><path class="o7rls83ym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:git-fork"} {...others} />);
}

export default Component;
