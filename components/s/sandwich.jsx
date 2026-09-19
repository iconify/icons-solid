import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/o/ovi4-kvzp.css';
import '../../css/g/ggwztabin.css';
import '../../css/j/jznt5ac4w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGj828mb8c"><g class="wwvp95byt"><path class="ovi4-kvzp"/><path class="ggwztabin"/><path class="jznt5ac4w"/></g></mask></defs><path mask="url(#SVGj828mb8c)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:sandwich"} {...others} />);
}

export default Component;
