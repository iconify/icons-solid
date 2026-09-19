import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltghsnbbc.css';
import '../../css/s/spcgr69nj.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ltghsnbbc"/><path class="spcgr69nj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:premierepro"} {...others} />);
}

export default Component;
