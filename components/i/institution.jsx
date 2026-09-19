import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vo6e8nbzk.css';
import '../../css/z/zhe7nq6ez.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vo6e8nbzk"/><path class="zhe7nq6ez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:institution"} {...others} />);
}

export default Component;
