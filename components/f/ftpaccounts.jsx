import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bh9bsgbhr.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="bh9bsgbhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:ftpaccounts"} {...others} />);
}

export default Component;
