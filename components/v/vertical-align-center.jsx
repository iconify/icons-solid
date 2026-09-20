import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bh-_msqeh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bh-_msqeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:vertical-align-center"} {...others} />);
}

export default Component;
