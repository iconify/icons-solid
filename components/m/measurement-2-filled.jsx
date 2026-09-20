import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz7h7p0mm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oz7h7p0mm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:measurement-2-filled"} {...others} />);
}

export default Component;
