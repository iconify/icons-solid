import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oijo2cuyy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oijo2cuyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:message-2"} {...others} />);
}

export default Component;
