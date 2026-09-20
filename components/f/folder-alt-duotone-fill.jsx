import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxlpcxeof.css';
import '../../css/d/dg1ec6byn.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="jxlpcxeof"/><path clip-rule="evenodd" class="dg1ec6byn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-alt-duotone-fill"} {...others} />);
}

export default Component;
