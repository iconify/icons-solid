import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhmipyblw.css';
import '../../css/v/vztvh8bnd.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="qhmipyblw"/><path class="vztvh8bnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-google-plus"} {...others} />);
}

export default Component;
