import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4p9_lb7h.css';
import '../../css/z/zdysqf2rh.css';
import '../../css/j/jnikex4dn.css';
import '../../css/k/kh6s3mrzo.css';
import '../../css/o/ololfx6mi.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="h4p9_lb7h"/><path class="zdysqf2rh"/><path class="jnikex4dn"/><path class="kh6s3mrzo"/><path class="ololfx6mi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:african-union"} {...others} />);
}

export default Component;
