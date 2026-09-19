import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u28_fdbqf.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="u28_fdbqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:octopus-deploy"} {...others} />);
}

export default Component;
