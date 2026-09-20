import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukm9jj2re.css';
import '../../css/g/gjvd0pbej.css';
import '../../css/m/mj2qzeess.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGYKI6njLI"><g class="ukm9jj2re"><path class="gjvd0pbej"/><path class="mj2qzeess"/></g></mask></defs><path mask="url(#SVGYKI6njLI)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-check-duotone-line"} {...others} />);
}

export default Component;
