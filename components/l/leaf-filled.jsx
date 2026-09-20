import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djrtgp1tx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="djrtgp1tx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:leaf-filled"} {...others} />);
}

export default Component;
