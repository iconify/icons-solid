import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajrs5fbzp.css';
import '../../css/h/hkgap18lv.css';
import '../../css/t/t_aewkbjn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ajrs5fbzp"/><path class="hkgap18lv"/><path class="t_aewkbjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-grids-dark"} {...others} />);
}

export default Component;
