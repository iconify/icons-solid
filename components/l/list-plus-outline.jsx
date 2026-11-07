import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvcpgv7_z.css';
import '../../css/d/dbhmpnbzu.css';
import '../../css/w/wxzzy-8jl.css';
import '../../css/o/o7bzzabge.css';
import '../../css/m/mgbg27bmw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gvcpgv7_z"/><path class="dbhmpnbzu"/><path class="wxzzy-8jl"/><path class="o7bzzabge"/><path class="mgbg27bmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-plus-outline"} {...others} />);
}

export default Component;
