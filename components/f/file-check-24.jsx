import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m8f6-zbvd.css';
import '../../css/m/mg23doo2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m8f6-zbvd"/><path class="mg23doo2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:file-check-24"} {...others} />);
}

export default Component;
