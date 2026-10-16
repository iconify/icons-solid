import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_519lb4c.css';
import '../../css/z/zg50c1boz.css';
import '../../css/e/ectprf4rs.css';
import '../../css/i/iuz5iu7bw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z_519lb4c"/><path class="zg50c1boz"/><path class="ectprf4rs"/><path class="iuz5iu7bw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wood-pole-48-bold"} {...others} />);
}

export default Component;
