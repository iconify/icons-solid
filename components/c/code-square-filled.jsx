import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1j3dac_p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j1j3dac_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:code-square-filled"} {...others} />);
}

export default Component;
