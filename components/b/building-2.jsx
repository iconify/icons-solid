import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/icoao1bvz.css';
import '../../css/i/iu7isjbib.css';
import '../../css/t/tzendbcli.css';
import '../../css/x/x41ud06-n.css';
import '../../css/w/wl2lznbgi.css';
import '../../css/b/b22ic2tca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="icoao1bvz wm-shadow"/><path class="iu7isjbib"/><path class="tzendbcli"/><path class="x41ud06-n"/><path class="wl2lznbgi"/><path class="b22ic2tca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:building-2"} {...others} />);
}

export default Component;
