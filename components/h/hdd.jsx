import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s3i_-bcxe.css';
import '../../css/j/jt42kebit.css';
import '../../css/e/ezw1i52ew.css';
import '../../css/t/thwemd3eh.css';
import '../../css/j/jmj9c6abz.css';
import '../../css/z/zcl6udv8k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGUET8pbTk"><g class="ft5dv1b6b"><rect class="s3i_-bcxe"/><circle class="jt42kebit"/><circle class="ezw1i52ew"/><circle class="thwemd3eh"/><circle class="jmj9c6abz"/><path class="zcl6udv8k"/></g></mask></defs><path mask="url(#SVGUET8pbTk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hdd"} {...others} />);
}

export default Component;
