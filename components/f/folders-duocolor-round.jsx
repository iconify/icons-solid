import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bi4b6bcql.css';
import '../../css/f/ft6s3wbhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bi4b6bcql"/><path class="ft6s3wbhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:folders-duocolor-round"} {...others} />);
}

export default Component;
