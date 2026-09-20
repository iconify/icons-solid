import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxk6u5upa.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cxk6u5upa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:upload-computer-solid"} {...others} />);
}

export default Component;
