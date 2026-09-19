import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/s/sdu0jtaxm.css';
import '../../css/u/uhnf3cv9h.css';
import '../../css/t/tk-3y645d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGf8R5Ae4C"><g class="s9cl3zbei"><path clip-rule="evenodd" class="sdu0jtaxm"/><path class="uhnf3cv9h"/><path class="tk-3y645d"/></g></mask></defs><path mask="url(#SVGf8R5Ae4C)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:buy"} {...others} />);
}

export default Component;
