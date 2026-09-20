import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkhz44dei.css';
import '../../css/g/gywxsibfz.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="nkhz44dei"/><path class="gywxsibfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:smiley-sparks-solid"} {...others} />);
}

export default Component;
