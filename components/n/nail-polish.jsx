import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cibtkmb-z.css';
import '../../css/b/bz27lsaws.css';
import '../../css/p/pup2il6io.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGDt06tdSJ"><g class="ft5dv1b6b"><path class="cibtkmb-z"/><path class="bz27lsaws"/><circle class="pup2il6io"/></g></mask></defs><path mask="url(#SVGDt06tdSJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:nail-polish"} {...others} />);
}

export default Component;
