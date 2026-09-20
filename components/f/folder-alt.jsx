import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/c/crhqw7b7l.css';
import '../../css/g/g048xd03g.css';
import '../../css/e/e0hfau-no.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="crhqw7b7l"/><path class="g048xd03g"/><path class="e0hfau-no"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-alt"} {...others} />);
}

export default Component;
