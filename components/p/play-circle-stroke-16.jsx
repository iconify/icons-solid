import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upo67d98k.css';
import '../../css/i/ikh678xfg.css';

const viewBox = {"width":16,"height":16};
const content = `<circle class="upo67d98k"/><path class="ikh678xfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:play-circle-stroke-16"} {...others} />);
}

export default Component;
