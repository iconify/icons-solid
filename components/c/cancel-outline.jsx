import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ol05o0b3n.css';
import '../../css/b/buewkbcgq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ol05o0b3n"/><path clip-rule="evenodd" class="buewkbcgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:cancel-outline"} {...others} />);
}

export default Component;
