import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywize-p9l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ywize-p9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:desk-for-laptop"} {...others} />);
}

export default Component;
