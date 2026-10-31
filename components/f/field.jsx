import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h6vor3s3p.css';
import '../../css/j/je6n-zzdf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="h6vor3s3p"/><path class="je6n-zzdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:field"} {...others} />);
}

export default Component;
