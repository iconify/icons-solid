import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kq6mph6nz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kq6mph6nz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:folder-connection-filled"} {...others} />);
}

export default Component;
