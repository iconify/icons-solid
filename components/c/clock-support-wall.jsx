import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/plml1nb5a.css';
import '../../css/i/iq2ggzbaw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="plml1nb5a"/><path class="iq2ggzbaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:clock-support-wall"} {...others} />);
}

export default Component;
