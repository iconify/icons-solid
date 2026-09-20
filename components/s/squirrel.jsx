import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b34v4yqmt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b34v4yqmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:squirrel"} {...others} />);
}

export default Component;
