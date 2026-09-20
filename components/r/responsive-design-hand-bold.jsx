import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpgyleyhy.css';
import '../../css/h/hzmzgel7a.css';
import '../../css/n/n5o-hub3h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tpgyleyhy"/><path class="hzmzgel7a"/><path class="n5o-hub3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:responsive-design-hand-bold"} {...others} />);
}

export default Component;
