import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e32-4cb_y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e32-4cb_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:plus-filled"} {...others} />);
}

export default Component;
