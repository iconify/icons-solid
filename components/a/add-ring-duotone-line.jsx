import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukm9jj2re.css';
import '../../css/x/x-5kkscxs.css';
import '../../css/u/u165akbuh.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGGRI9iJRi"><g class="ukm9jj2re"><circle class="x-5kkscxs"/><path class="u165akbuh"/></g></mask></defs><path mask="url(#SVGGRI9iJRi)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:add-ring-duotone-line"} {...others} />);
}

export default Component;
