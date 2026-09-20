import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4rebd9gj.css';
import '../../css/x/xlas5tb-j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n4rebd9gj"/><path class="xlas5tb-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:dgnx"} {...others} />);
}

export default Component;
