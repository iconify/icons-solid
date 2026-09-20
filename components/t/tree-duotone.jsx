import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gr70o2bnl.css';
import '../../css/n/nqu-0evvj.css';
import '../../css/k/kqeot6bhn.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGexzpqcxm"><g class="ft5dv1b6b"><path class="gr70o2bnl"/><path clip-rule="evenodd" class="nqu-0evvj"/><path class="kqeot6bhn"/></g></mask></defs><path mask="url(#SVGexzpqcxm)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:tree-duotone"} {...others} />);
}

export default Component;
