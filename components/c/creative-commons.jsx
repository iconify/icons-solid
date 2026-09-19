import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hieikacsf.css';
import '../../css/d/dp-b6abae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hieikacsf"/><path class="dp-b6abae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:creative-commons"} {...others} />);
}

export default Component;
