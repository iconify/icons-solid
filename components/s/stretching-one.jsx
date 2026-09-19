import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/v_mrg_w2s.css';
import '../../css/u/ui9-jtblu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGYpTeprJD"><g class="rohhhzb0l"><circle class="v_mrg_w2s"/><path class="ui9-jtblu"/></g></mask></defs><path mask="url(#SVGYpTeprJD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:stretching-one"} {...others} />);
}

export default Component;
