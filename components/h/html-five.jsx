import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/mymen8byk.css';
import '../../css/h/hgt4vzbwi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGC7k7Mcas"><g class="rohhhzb0l"><path class="mymen8byk"/><path class="hgt4vzbwi"/></g></mask></defs><path mask="url(#SVGC7k7Mcas)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:html-five"} {...others} />);
}

export default Component;
