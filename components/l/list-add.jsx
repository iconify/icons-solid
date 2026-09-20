import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjf_c6bxe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wjf_c6bxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:list-add"} {...others} />);
}

export default Component;
