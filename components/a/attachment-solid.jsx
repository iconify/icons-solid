import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8xd7l3mw.css';
import '../../css/e/emm9ff-2t.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="q8xd7l3mw"/><path clip-rule="evenodd" class="emm9ff-2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:attachment-solid"} {...others} />);
}

export default Component;
