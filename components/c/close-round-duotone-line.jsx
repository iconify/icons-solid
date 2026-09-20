import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukm9jj2re.css';
import '../../css/x/x-5kkscxs.css';
import '../../css/k/k760izbld.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGi3NDrbmQ"><g class="ukm9jj2re"><circle class="x-5kkscxs"/><path class="k760izbld"/></g></mask></defs><path mask="url(#SVGi3NDrbmQ)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:close-round-duotone-line"} {...others} />);
}

export default Component;
