import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kf5i7bcad.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kf5i7bcad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:server2-filled"} {...others} />);
}

export default Component;
