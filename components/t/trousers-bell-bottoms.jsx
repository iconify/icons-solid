import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/x4tswvbrt.css';
import '../../css/b/bfyy76dbl.css';
import '../../css/m/m2ok91k_r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGj6SymeWI"><g class="wwvp95byt"><path class="x4tswvbrt"/><path class="bfyy76dbl"/><path class="m2ok91k_r"/></g></mask></defs><path mask="url(#SVGj6SymeWI)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:trousers-bell-bottoms"} {...others} />);
}

export default Component;
