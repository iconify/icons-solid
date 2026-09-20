import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ye9ypdw-f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ye9ypdw-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:backward-filled"} {...others} />);
}

export default Component;
