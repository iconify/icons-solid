import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukm9jj2re.css';
import '../../css/m/mji35ib1z.css';
import '../../css/f/f1vwfqbhe.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGZ8zPDckf"><g class="ukm9jj2re"><path class="mji35ib1z"/><path class="f1vwfqbhe"/></g></mask></defs><path mask="url(#SVGZ8zPDckf)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-add-duotone-line"} {...others} />);
}

export default Component;
