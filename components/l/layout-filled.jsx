import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvlknyuzw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xvlknyuzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:layout-filled"} {...others} />);
}

export default Component;
