import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvlvhpb4k.css';
import '../../css/a/a0zl88bqz.css';
import '../../css/f/f7o5wcbyu.css';
import '../../css/c/ccb59bcuz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cvlvhpb4k"><circle class="a0zl88bqz"/><circle class="f7o5wcbyu"/><path class="ccb59bcuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-percent-bold"} {...others} />);
}

export default Component;
