import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwzpwfbbu.css';
import '../../css/r/ri95jlkhc.css';
import '../../css/a/avb8i1b-g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gwzpwfbbu"/><path clip-rule="evenodd" class="ri95jlkhc"/><path class="avb8i1b-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:mega-eth"} {...others} />);
}

export default Component;
