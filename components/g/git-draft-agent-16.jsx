import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odvyybvbi.css';
import '../../css/b/b2gj-9bfn.css';
import '../../css/c/c_sefrbir.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="odvyybvbi"/><path class="b2gj-9bfn"/><path class="c_sefrbir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:git-draft-agent-16"} {...others} />);
}

export default Component;
