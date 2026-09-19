import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmjd7wbda.css';

const viewBox = {"width":96,"height":96};
const content = `<path clip-rule="evenodd" class="xmjd7wbda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:kmd"} {...others} />);
}

export default Component;
