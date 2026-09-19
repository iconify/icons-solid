import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/mcopcxbjz.css';
import '../../css/f/f4-st3beb.css';
import '../../css/v/veijp88xp.css';
import '../../css/y/ye7rq2zrl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMTklgqzt"><g class="s9cl3zbei"><path clip-rule="evenodd" class="mcopcxbjz"/><path class="f4-st3beb"/><path class="veijp88xp"/><path class="ye7rq2zrl"/></g></mask></defs><path mask="url(#SVGMTklgqzt)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:wallet"} {...others} />);
}

export default Component;
