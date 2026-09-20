import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4_adlm8w.css';
import '../../css/v/vo71evf5d.css';
import '../../css/c/ca_ybuj8s.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="d4_adlm8w"/><path class="vo71evf5d"/><path class="ca_ybuj8s"/><path class="e4zfowz9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:orthodox-cross"} {...others} />);
}

export default Component;
