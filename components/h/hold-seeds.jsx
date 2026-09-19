import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/ajyf3nzah.css';
import '../../css/s/sqkeg0bva.css';
import '../../css/r/ralnbt_7a.css';
import '../../css/c/cz_9-vblt.css';
import '../../css/i/ibnn1qmej.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdB9q6v8l"><g class="rohhhzb0l"><path class="ajyf3nzah"/><path class="sqkeg0bva"/><circle class="ralnbt_7a"/><circle class="cz_9-vblt"/><circle class="ibnn1qmej"/></g></mask></defs><path mask="url(#SVGdB9q6v8l)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hold-seeds"} {...others} />);
}

export default Component;
