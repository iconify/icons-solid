import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3nu1cc-n.css';
import '../../css/m/m7_384bcw.css';

const viewBox = {"width":960,"height":960,"top":-960};
const content = `<path class="s3nu1cc-n"/><path class="m7_384bcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:actionscript"} {...others} />);
}

export default Component;
