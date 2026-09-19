import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/q/qhcun_l9h.css';
import '../../css/d/d4_2msbzg.css';
import '../../css/q/q3w-2jpjr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGbfzjNdrO"><g class="ylrso7y3c"><path class="qhcun_l9h"/><path class="d4_2msbzg"/><path class="q3w-2jpjr"/></g></mask></defs><path mask="url(#SVGbfzjNdrO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:webcam"} {...others} />);
}

export default Component;
