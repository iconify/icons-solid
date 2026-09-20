import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d60x365_f.css';
import '../../css/x/xm0m4wb9x.css';
import '../../css/r/r2tvs_tus.css';
import '../../css/i/ioxrwsrea.css';

const viewBox = {"width":228,"height":198};
const content = `<path class="d60x365_f"/><path class="xm0m4wb9x"/><path class="r2tvs_tus"/><path class="ioxrwsrea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:midudev"} {...others} />);
}

export default Component;
