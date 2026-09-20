import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kh_sznb5z.css';
import '../../css/z/zz6yhdbwi.css';

const viewBox = {"width":11,"height":11};
const content = `<path class="kh_sznb5z"/><path class="zz6yhdbwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:drinking-water-11"} {...others} />);
}

export default Component;
