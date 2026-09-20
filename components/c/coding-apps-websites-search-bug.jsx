import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6k8e83ng.css';
import '../../css/x/x8w8erb9x.css';
import '../../css/k/ka7_tbczt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f6k8e83ng"/><path class="x8w8erb9x"/><path class="ka7_tbczt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:coding-apps-websites-search-bug"} {...others} />);
}

export default Component;
