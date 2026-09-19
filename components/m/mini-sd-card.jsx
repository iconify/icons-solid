import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/r/rlus9bcvf.css';
import '../../css/b/b9p_odg0a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGrCT9i6JL"><g class="s9cl3zbei"><path clip-rule="evenodd" class="rlus9bcvf"/><path class="b9p_odg0a"/></g></mask></defs><path mask="url(#SVGrCT9i6JL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:mini-sd-card"} {...others} />);
}

export default Component;
