import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsrb3dbkn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dsrb3dbkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:download-stack-solid"} {...others} />);
}

export default Component;
