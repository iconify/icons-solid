import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/f/ffvw63bvw.css';
import '../../css/n/n63q_g6zn.css';
import '../../css/u/u4fw00ibv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGrqdpXljn"><g class="wwvp95byt"><path class="ffvw63bvw"/><circle class="n63q_g6zn"/><path class="u4fw00ibv"/></g></mask></defs><path mask="url(#SVGrqdpXljn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:flip-camera"} {...others} />);
}

export default Component;
