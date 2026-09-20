import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vi7f8tu-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vi7f8tu-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:zip-file-solid"} {...others} />);
}

export default Component;
