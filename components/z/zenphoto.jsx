import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc6yfl_7l.css';

const viewBox = {"width":1025,"height":898};
const content = `<path class="bc6yfl_7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:zenphoto"} {...others} />);
}

export default Component;
