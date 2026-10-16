import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sffhwnb-a.css';

const viewBox = {"width":310,"height":310};
const content = `<path class="sffhwnb-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cockpit-cms-dark"} {...others} />);
}

export default Component;
