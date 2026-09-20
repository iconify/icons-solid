import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di16lc9hz.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="di16lc9hz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:infuse-two-filled"} {...others} />);
}

export default Component;
