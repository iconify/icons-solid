import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m119fqbjc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="m119fqbjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ruler-pen-outline"} {...others} />);
}

export default Component;
