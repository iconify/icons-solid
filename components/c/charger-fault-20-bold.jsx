import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ensv1cbds.css';
import '../../css/c/cgbp4zbep.css';
import '../../css/g/gm5d6ob0a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ensv1cbds"/><path class="cgbp4zbep"/><path class="gm5d6ob0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-fault-20-bold"} {...others} />);
}

export default Component;
