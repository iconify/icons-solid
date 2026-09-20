import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-ggtpb7h.css';
import '../../css/o/ojum2hmgf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w-ggtpb7h"/><path class="ojum2hmgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:church-filled"} {...others} />);
}

export default Component;
