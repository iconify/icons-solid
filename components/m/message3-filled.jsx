import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oddw4b50v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oddw4b50v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:message3-filled"} {...others} />);
}

export default Component;
