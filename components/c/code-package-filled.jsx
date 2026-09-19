import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vv7ye3m0o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vv7ye3m0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:code-package-filled"} {...others} />);
}

export default Component;
