import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykp4-zbtx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ykp4-zbtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:blank-alt-fill"} {...others} />);
}

export default Component;
