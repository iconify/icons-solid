import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pr1i_9hyb.css';
import '../../css/m/mvrdqjb2o.css';
import '../../css/j/j2t_tubbx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG1DkFmeGu"><g class="ft5dv1b6b"><path class="pr1i_9hyb"/><path class="mvrdqjb2o"/><circle class="j2t_tubbx"/></g></mask></defs><path mask="url(#SVG1DkFmeGu)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:kitchen-knife"} {...others} />);
}

export default Component;
