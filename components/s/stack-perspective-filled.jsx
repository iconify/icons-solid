import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/olqwrl1db.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="olqwrl1db"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:stack-perspective-filled"} {...others} />);
}

export default Component;
