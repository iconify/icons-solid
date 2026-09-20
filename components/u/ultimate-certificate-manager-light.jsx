import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eps4tbc5w.css';
import '../../css/a/a18sp8bki.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eps4tbc5w"/><path class="a18sp8bki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ultimate-certificate-manager-light"} {...others} />);
}

export default Component;
