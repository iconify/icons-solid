import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/ms5c41bel.css';
import '../../css/q/quptsdbge.css';
import '../../css/l/lfsiu7tnm.css';
import '../../css/f/f0j6j6igf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPY43FGCD"><g class="rohhhzb0l"><ellipse class="ms5c41bel"/><path class="quptsdbge"/><path class="lfsiu7tnm"/><path class="f0j6j6igf"/></g></mask></defs><path mask="url(#SVGPY43FGCD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:tree-one"} {...others} />);
}

export default Component;
