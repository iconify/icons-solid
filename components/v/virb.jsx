import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj4pa9fcv.css';

const viewBox = {"width":464,"height":448};
const content = `<path class="oj4pa9fcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:virb"} {...others} />);
}

export default Component;
