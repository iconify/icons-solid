import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgwml-q3k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kgwml-q3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:upload-computer-remix"} {...others} />);
}

export default Component;
