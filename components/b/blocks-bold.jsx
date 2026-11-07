import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjqgooy9h.css';
import '../../css/y/ydubtinmf.css';
import '../../css/l/l00c_fwiq.css';
import '../../css/c/cjuv4ubuw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jjqgooy9h"/><path class="ydubtinmf"/><path class="l00c_fwiq"/><path class="cjuv4ubuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:blocks-bold"} {...others} />);
}

export default Component;
