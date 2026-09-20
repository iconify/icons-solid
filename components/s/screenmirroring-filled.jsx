import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agnf6sbxs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="agnf6sbxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:screenmirroring-filled"} {...others} />);
}

export default Component;
