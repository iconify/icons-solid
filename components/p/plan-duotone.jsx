import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/unw49zadl.css';
import '../../css/o/ooyrpacaq.css';
import '../../css/z/zx2i3saxl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="unw49zadl"/><path class="ooyrpacaq"/><path class="zx2i3saxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:plan-duotone"} {...others} />);
}

export default Component;
