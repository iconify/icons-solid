import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_2u2kbxp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b_2u2kbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:foldable-closed-solid"} {...others} />);
}

export default Component;
