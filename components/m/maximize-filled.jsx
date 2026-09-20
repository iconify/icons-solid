import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdk9i9par.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mdk9i9par"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:maximize-filled"} {...others} />);
}

export default Component;
