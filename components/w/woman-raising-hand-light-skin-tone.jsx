import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slidqvbjz.css';
import '../../css/n/nhoeb7bpx.css';
import '../../css/i/ihvnpphqd.css';
import '../../css/e/e1ziwcc2e.css';
import '../../css/q/qw078pbvm.css';
import '../../css/e/eka_p8bzq.css';
import '../../css/g/gtbqzve7u.css';
import '../../css/s/s5q3e4bjp.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="slidqvbjz"/><path class="nhoeb7bpx"/><path class="ihvnpphqd"/><path class="e1ziwcc2e"/><path class="qw078pbvm"/><path class="eka_p8bzq"/><path class="gtbqzve7u"/><path class="s5q3e4bjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-raising-hand-light-skin-tone"} {...others} />);
}

export default Component;
