import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_nj2bbaf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q_nj2bbaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:table-2-filled"} {...others} />);
}

export default Component;
