import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tugsbud.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="z6tugsbud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:machine-c-filled"} {...others} />);
}

export default Component;
