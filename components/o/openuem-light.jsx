import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h568fcbae.css';
import '../../css/x/x1ipfizhl.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="h568fcbae"/><path class="x1ipfizhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openuem-light"} {...others} />);
}

export default Component;
