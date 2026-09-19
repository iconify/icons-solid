import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hmqsevbxu.css';
import '../../css/c/c-21ecbzm.css';
import '../../css/u/umx108bql.css';
import '../../css/c/c4vps_bgo.css';
import '../../css/l/l7kugy4ne.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGyWf9Cejo"><g class="ft5dv1b6b"><path class="hmqsevbxu"/><path class="c-21ecbzm"/><path class="umx108bql"/><circle class="c4vps_bgo"/><circle class="l7kugy4ne"/></g></mask></defs><path mask="url(#SVGyWf9Cejo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:projector"} {...others} />);
}

export default Component;
