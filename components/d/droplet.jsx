import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1qduacyd.css';
import '../../css/q/qn2ryybin.css';
import '../../css/a/ashni5bvq.css';
import '../../css/s/s9yhqqbbm.css';
import '../../css/o/odzhsqb5m.css';
import '../../css/h/hqsyefq7c.css';
import '../../css/p/pntq6rb2x.css';
import '../../css/o/o77lieura.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v1qduacyd wm-shadow"/><path class="qn2ryybin"/><path class="ashni5bvq"/><path class="s9yhqqbbm"/><path class="odzhsqb5m"/><path class="hqsyefq7c wm-shine"/><path class="pntq6rb2x"/><path class="o77lieura"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:droplet"} {...others} />);
}

export default Component;
