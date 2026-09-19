import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/x_ufqn_db.css';
import '../../css/m/mmh40onkh.css';
import '../../css/m/mk2bqkhul.css';
import '../../css/g/g3tsi4b-e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGL6Ewb6wG"><g class="wwvp95byt"><path class="x_ufqn_db"/><path class="mmh40onkh"/><path class="mk2bqkhul"/><path class="g3tsi4b-e"/></g></mask></defs><path mask="url(#SVGL6Ewb6wG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:mac-finder"} {...others} />);
}

export default Component;
