import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4sop7z6r.css';
import '../../css/b/b5ugqsb0g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a4sop7z6r"/><path class="b5ugqsb0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:wifi-no-filled"} {...others} />);
}

export default Component;
