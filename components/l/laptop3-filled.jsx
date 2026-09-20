import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hltu5yboo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hltu5yboo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:laptop3-filled"} {...others} />);
}

export default Component;
