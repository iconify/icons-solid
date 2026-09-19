import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypditfboi.css';
import '../../css/j/j2j3gdcfi.css';
import '../../css/x/xxphl5biz.css';
import '../../css/y/yo5mywban.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ypditfboi"/><path class="j2j3gdcfi"/><path class="xxphl5biz"/><path class="yo5mywban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:mouse"} {...others} />);
}

export default Component;
