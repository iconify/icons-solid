import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/z/znnlwu8uj.css';
import '../../css/k/kunopmwkl.css';
import '../../css/e/ejulgip2j.css';
import '../../css/p/poge4sbjc.css';
import '../../css/s/s75frwbdj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgMIeFdtB"><g class="gopnm44um"><path class="znnlwu8uj"/><path class="kunopmwkl"/><path class="ejulgip2j"/><path class="poge4sbjc"/><path class="s75frwbdj"/></g></mask></defs><path mask="url(#SVGgMIeFdtB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:liqueur"} {...others} />);
}

export default Component;
