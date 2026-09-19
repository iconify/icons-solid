import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cfcj5mbkc.css';
import '../../css/g/gjz44fbzs.css';
import '../../css/u/ufhycxbld.css';
import '../../css/t/tcaj15bgx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG5jXj6dJe"><g class="ft5dv1b6b"><rect class="cfcj5mbkc"/><circle class="gjz44fbzs"/><circle class="ufhycxbld"/><path class="tcaj15bgx"/></g></mask></defs><path mask="url(#SVG5jXj6dJe)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:gamepad"} {...others} />);
}

export default Component;
