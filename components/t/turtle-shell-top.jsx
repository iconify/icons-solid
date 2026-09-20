import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1sy9hifo.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="s1sy9hifo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:turtle-shell-top"} {...others} />);
}

export default Component;
