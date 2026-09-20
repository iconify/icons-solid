import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xs1dcgb3w.css';
import '../../css/e/ezrebmbjv.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGTJxG6b4E"><g class="ft5dv1b6b"><path class="xs1dcgb3w"/><path class="ezrebmbjv"/></g></mask></defs><path mask="url(#SVGTJxG6b4E)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:home-duotone-line"} {...others} />);
}

export default Component;
