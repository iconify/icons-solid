import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjdjckgkp.css';
import '../../css/s/sy3etbb8p.css';
import '../../css/p/ps55_-69a.css';

const viewBox = {"width":72,"height":72};
const content = `<circle transform="rotate(-45 36 36)" class="gjdjckgkp"/><path class="sy3etbb8p"/><circle class="ps55_-69a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:simple"} {...others} />);
}

export default Component;
