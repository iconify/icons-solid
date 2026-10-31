import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/id9crk2kl.css';
import '../../css/a/a9-xx3bie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="id9crk2kl"/><path class="a9-xx3bie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:files-duocolor-round"} {...others} />);
}

export default Component;
