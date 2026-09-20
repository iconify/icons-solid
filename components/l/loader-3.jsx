import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xdl40rb2r.css';
import '../../css/u/um318s3ug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xdl40rb2r"/><path class="um318s3ug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:loader-3"} {...others} />);
}

export default Component;
