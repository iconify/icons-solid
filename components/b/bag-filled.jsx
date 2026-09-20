import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmixd20za.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zmixd20za"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bag-filled"} {...others} />);
}

export default Component;
