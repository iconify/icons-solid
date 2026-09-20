import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyax_mekw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wyax_mekw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:linux-professional-institute"} {...others} />);
}

export default Component;
