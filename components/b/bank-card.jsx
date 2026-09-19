import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/p/p22wnqbnw.css';
import '../../css/f/f1nl8yjrl.css';
import '../../css/q/q9fzk183f.css';
import '../../css/g/g9ouegxjn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGSpd8pdZy"><g class="ufeehvblu"><path class="p22wnqbnw"/><path class="f1nl8yjrl"/><path class="q9fzk183f"/><path class="g9ouegxjn"/></g></mask></defs><path mask="url(#SVGSpd8pdZy)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bank-card"} {...others} />);
}

export default Component;
