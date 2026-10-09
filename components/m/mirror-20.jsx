import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utpm0pbkq.css';
import '../../css/g/gl28njbdi.css';
import '../../css/m/m-7py9b-g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="utpm0pbkq"/><path class="gl28njbdi"/><path class="m-7py9b-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mirror-20"} {...others} />);
}

export default Component;
