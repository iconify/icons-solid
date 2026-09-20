import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/giwbff7kf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="giwbff7kf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:angle-right-square-filled"} {...others} />);
}

export default Component;
