import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/ajyf3nzah.css';
import '../../css/s/sqkeg0bva.css';
import '../../css/f/ft8985_nd.css';
import '../../css/f/f4un4zb0e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEqshUday"><g class="rohhhzb0l"><path class="ajyf3nzah"/><path class="sqkeg0bva"/><rect class="ft8985_nd"/><path class="f4un4zb0e"/></g></mask></defs><path mask="url(#SVGEqshUday)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hold-interface"} {...others} />);
}

export default Component;
