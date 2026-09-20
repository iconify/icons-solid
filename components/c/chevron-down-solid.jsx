import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zq5--8b_s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zq5--8b_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:chevron-down-solid"} {...others} />);
}

export default Component;
