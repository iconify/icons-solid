import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqibyvg5x.css';
import '../../css/w/wwyne7smp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="iqibyvg5x"/><path class="wwyne7smp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:rocket"} {...others} />);
}

export default Component;
