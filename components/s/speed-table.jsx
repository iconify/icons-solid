import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bj0gsaczy.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bj0gsaczy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:speed-table"} {...others} />);
}

export default Component;
