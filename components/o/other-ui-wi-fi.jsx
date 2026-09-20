import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nk1ibeynv.css';
import '../../css/y/yettion4e.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nk1ibeynv"/><path class="yettion4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:other-ui-wi-fi"} {...others} />);
}

export default Component;
