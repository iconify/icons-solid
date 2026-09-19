import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3a8fpbxd.css';

const viewBox = {"width":87,"height":26};
const content = `<path class="u3a8fpbxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:wordmark-capital-zendesk-26"} {...others} />);
}

export default Component;
