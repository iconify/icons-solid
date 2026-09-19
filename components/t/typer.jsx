import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ni_8jsb-d.css';
import '../../css/t/tblwxac3r.css';
import '../../css/b/bkf_frbkg.css';

const viewBox = {"width":128,"height":128};
const content = `<rect class="ni_8jsb-d"/><rect class="tblwxac3r"/><path class="bkf_frbkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:typer"} {...others} />);
}

export default Component;
