import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/j/jinlz1b9h.css';
import '../../css/o/oihj5cp4i.css';
import '../../css/t/t66k76bse.css';
import '../../css/x/xit4s12io.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG5UuaddnW"><g class="gopnm44um"><path class="jinlz1b9h"/><path class="oihj5cp4i"/><path class="t66k76bse"/><path class="xit4s12io"/></g></mask></defs><path mask="url(#SVG5UuaddnW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:data-server"} {...others} />);
}

export default Component;
