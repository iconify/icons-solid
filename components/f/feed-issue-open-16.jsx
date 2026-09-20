import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pftvle2xc.css';
import '../../css/c/cxuk12djg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pftvle2xc"/><path class="cxuk12djg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:feed-issue-open-16"} {...others} />);
}

export default Component;
