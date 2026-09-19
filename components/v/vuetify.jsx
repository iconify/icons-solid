import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pbtl_1ezz.css';
import '../../css/y/y6c1hc4nj.css';
import '../../css/n/ns9a12iaq.css';
import '../../css/z/zm-9z7rwf.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="pbtl_1ezz"/><path class="y6c1hc4nj"/><path class="ns9a12iaq"/><path class="zm-9z7rwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:vuetify"} {...others} />);
}

export default Component;
