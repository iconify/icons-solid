import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eizigmdoq.css';
import '../../css/c/czpw7jf4c.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="eizigmdoq"/><path class="czpw7jf4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:copy-filled"} {...others} />);
}

export default Component;
