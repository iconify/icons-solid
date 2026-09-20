import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqaqp2cek.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pqaqp2cek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:lock-keyhole-open2-filled"} {...others} />);
}

export default Component;
