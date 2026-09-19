import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/e/el01ndb8a.css';
import '../../css/x/x6gu8c48n.css';
import '../../css/o/onoi8163z.css';
import '../../css/v/v69jo5bdo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGP2Hxb5k"><g class="s9cl3zbei"><path class="el01ndb8a"/><path class="x6gu8c48n"/><circle class="onoi8163z"/><path class="v69jo5bdo"/></g></mask></defs><path mask="url(#SVGGP2Hxb5k)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:file-settings"} {...others} />);
}

export default Component;
