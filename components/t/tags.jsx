import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dqtqk5bgh.css';
import '../../css/a/ae76m59os.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dqtqk5bgh"/><path class="ae76m59os"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:tags"} {...others} />);
}

export default Component;
