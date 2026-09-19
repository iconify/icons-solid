import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vmh3nbbvo.css';
import '../../css/a/anh5kmhkf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGcNm2IbVG"><g class="ft5dv1b6b"><path class="vmh3nbbvo"/><path class="anh5kmhkf"/></g></mask></defs><path mask="url(#SVGcNm2IbVG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:road-cone"} {...others} />);
}

export default Component;
