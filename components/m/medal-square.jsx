import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbo7c_jnf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xbo7c_jnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:medal-square"} {...others} />);
}

export default Component;
