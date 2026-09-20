import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zw5f2fnxy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zw5f2fnxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:new-window-page-light"} {...others} />);
}

export default Component;
