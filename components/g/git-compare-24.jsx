import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwvqjfwul.css';
import '../../css/h/he6gs9bkw.css';
import '../../css/p/prs_noded.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dwvqjfwul"/><path class="he6gs9bkw"/><path class="prs_noded"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:git-compare-24"} {...others} />);
}

export default Component;
