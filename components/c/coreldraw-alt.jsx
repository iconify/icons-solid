import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2_ie9n9l.css';

const viewBox = {"width":371,"height":512};
const content = `<path clip-rule="evenodd" class="b2_ie9n9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:coreldraw-alt"} {...others} />);
}

export default Component;
