import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/j/jdvggry0v.css';
import '../../css/p/pkbpbqbim.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGxYvsUiHr"><g class="wwvp95byt"><path clip-rule="evenodd" class="jdvggry0v"/><path class="pkbpbqbim"/></g></mask></defs><path mask="url(#SVGxYvsUiHr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:gps"} {...others} />);
}

export default Component;
