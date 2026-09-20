import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukm9jj2re.css';
import '../../css/z/zcwp9kj6u.css';
import '../../css/m/mji35ib1z.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGgEiWwdQX"><g class="ukm9jj2re"><path class="zcwp9kj6u"/><path class="mji35ib1z"/></g></mask></defs><path mask="url(#SVGgEiWwdQX)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-del-duotone-line"} {...others} />);
}

export default Component;
