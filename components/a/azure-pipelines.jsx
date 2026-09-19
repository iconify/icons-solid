import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwdimhb5w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mwdimhb5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:azure-pipelines"} {...others} />);
}

export default Component;
