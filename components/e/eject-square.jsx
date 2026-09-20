import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xyxefdb9k.css';
import '../../css/u/uwglf-07y.css';
import '../../css/s/smzldib7f.css';
import '../../css/h/hblczebef.css';
import '../../css/c/csxsy-bui.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="xyxefdb9k"/><path class="uwglf-07y"/><path class="smzldib7f"/><path class="hblczebef"/><path class="csxsy-bui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:eject-square"} {...others} />);
}

export default Component;
