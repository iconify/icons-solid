import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gi7onfq8a.css';
import '../../css/a/azkasfb2o.css';
import '../../css/g/gzejcj1pe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gi7onfq8a wm-shadow"/><path class="azkasfb2o wm-k"/><path class="gzejcj1pe wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:align-center"} {...others} />);
}

export default Component;
