import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukm9jj2re.css';
import '../../css/j/jmkfw4bqa.css';
import '../../css/u/ue5m-lb6r.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGydMATduU"><g class="ukm9jj2re"><path class="jmkfw4bqa"/><path class="ue5m-lb6r"/></g></mask></defs><path mask="url(#SVGydMATduU)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:close-ring-duotone-line"} {...others} />);
}

export default Component;
