import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y43w1h50n.css';
import '../../css/j/jqc7hmb-f.css';
import '../../css/x/x2bi_jl-x.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="y43w1h50n"/><path class="jqc7hmb-f"/><path class="x2bi_jl-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:kml-file"} {...others} />);
}

export default Component;
