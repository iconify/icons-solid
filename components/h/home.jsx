import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/h/hoy2h8bpa.css';
import '../../css/u/uxe07sber.css';
import '../../css/z/znbzetb7r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGUEQMbVPJ"><g class="s9cl3zbei"><path class="hoy2h8bpa"/><path class="uxe07sber"/><path class="znbzetb7r"/></g></mask></defs><path mask="url(#SVGUEQMbVPJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:home"} {...others} />);
}

export default Component;
