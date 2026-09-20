import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bnadv3bfh.css';
import '../../css/j/j0xz4wbzw.css';
import '../../css/d/d0e6wcchp.css';
import '../../css/u/usnw-tagi.css';
import '../../css/x/xjuqwibjx.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="bnadv3bfh"/><path class="j0xz4wbzw"/><path class="d0e6wcchp"/><path class="usnw-tagi"/><path class="xjuqwibjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:forauth"} {...others} />);
}

export default Component;
