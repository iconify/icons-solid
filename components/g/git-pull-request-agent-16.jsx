import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7qv-mz-f.css';
import '../../css/e/e76qu_bjd.css';
import '../../css/i/ift_7p48t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b7qv-mz-f"/><path class="e76qu_bjd"/><path class="ift_7p48t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:git-pull-request-agent-16"} {...others} />);
}

export default Component;
