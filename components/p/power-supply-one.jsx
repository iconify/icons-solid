import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/v/v988xccny.css';
import '../../css/v/vkdx382ki.css';
import '../../css/v/v8cds7a2u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGp6RUMcqi"><g class="wwvp95byt"><path class="v988xccny"/><path class="vkdx382ki"/><path class="v8cds7a2u"/></g></mask></defs><path mask="url(#SVGp6RUMcqi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:power-supply-one"} {...others} />);
}

export default Component;
