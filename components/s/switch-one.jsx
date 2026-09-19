import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/gp0k69hqw.css';
import '../../css/l/lxw3yac5g.css';
import '../../css/a/a-4yy16xc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><circle class="gp0k69hqw"/><rect transform="rotate(90 36.006 19.334)" class="lxw3yac5g"/><rect transform="rotate(-180 36.006 29.852)" class="a-4yy16xc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:switch-one"} {...others} />);
}

export default Component;
