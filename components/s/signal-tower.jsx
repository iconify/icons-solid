import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/zg8hssbyt.css';
import '../../css/g/gjvsk4icl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGLW4rHc6o"><g class="aql7dnt-u"><path class="zg8hssbyt"/><path class="gjvsk4icl"/></g></mask></defs><path mask="url(#SVGLW4rHc6o)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:signal-tower"} {...others} />);
}

export default Component;
