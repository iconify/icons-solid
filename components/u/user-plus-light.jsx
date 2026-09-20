import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s58yrv62u.css';
import '../../css/h/hkyycvtfp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s58yrv62u"/><path class="hkyycvtfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:user-plus-light"} {...others} />);
}

export default Component;
