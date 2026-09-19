import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prrfs4b3a.css';

const viewBox = {"width":400,"height":512};
const content = `<path class="prrfs4b3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:nutritionix"} {...others} />);
}

export default Component;
