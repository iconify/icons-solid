import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/k/ktk03iqiw.css';
import '../../css/y/y45tttcaa.css';
import '../../css/f/fk9nibbzj.css';
import '../../css/y/y0yq2e4to.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGsEOG5bsW"><g class="hv130ab-t"><path class="ktk03iqiw"/><path class="y45tttcaa"/><path class="fk9nibbzj"/><path class="y0yq2e4to"/></g></mask></defs><path mask="url(#SVGsEOG5bsW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:gate-machine"} {...others} />);
}

export default Component;
