import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thf03bbvf.css';
import '../../css/i/i1ehzlbeu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="thf03bbvf"/><path class="i1ehzlbeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:microgrid-20"} {...others} />);
}

export default Component;
