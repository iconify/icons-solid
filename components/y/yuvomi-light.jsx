import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_6jlnb7u.css';
import '../../css/i/i66y37nvy.css';
import '../../css/u/usf_wsn7b.css';
import '../../css/a/a2ox3_bfp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g_6jlnb7u"/><circle class="i66y37nvy"/><circle class="usf_wsn7b"/><circle class="a2ox3_bfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:yuvomi-light"} {...others} />);
}

export default Component;
