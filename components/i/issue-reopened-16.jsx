import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsgnn88kw.css';
import '../../css/p/ph02kkyzz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xsgnn88kw"/><path class="ph02kkyzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:issue-reopened-16"} {...others} />);
}

export default Component;
