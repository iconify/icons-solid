import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/quobgb7ei.css';
import '../../css/s/s3cqxlbus.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="quobgb7ei"/><circle class="s3cqxlbus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:file-image-stroke-12"} {...others} />);
}

export default Component;
