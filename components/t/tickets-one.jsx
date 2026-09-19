import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-8z_gbzr.css';
import '../../css/y/y-rlg20sg.css';
import '../../css/j/jgpp58bkm.css';
import '../../css/h/hztu6308b.css';
import '../../css/j/jomfpjb3e.css';
import '../../css/k/k7vi76t5s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGCXhzlblJ"><g class="ft5dv1b6b"><rect transform="rotate(-90 5 42)" class="a-8z_gbzr"/><path class="y-rlg20sg"/><circle class="jgpp58bkm"/><circle class="hztu6308b"/><circle class="jomfpjb3e"/><path class="k7vi76t5s"/></g></mask></defs><path mask="url(#SVGCXhzlblJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:tickets-one"} {...others} />);
}

export default Component;
