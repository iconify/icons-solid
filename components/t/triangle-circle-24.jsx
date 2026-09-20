import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ib9o-eblw.css';
import '../../css/k/kret6cc4w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ib9o-eblw"/><path class="kret6cc4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:triangle-circle-24"} {...others} />);
}

export default Component;
