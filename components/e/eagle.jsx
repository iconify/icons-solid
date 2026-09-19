import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xcl6nbhkj.css';
import '../../css/v/vlzbjhbij.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGb6KAzcRO"><g class="ft5dv1b6b"><path class="xcl6nbhkj"/><circle class="vlzbjhbij"/></g></mask></defs><path mask="url(#SVGb6KAzcRO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:eagle"} {...others} />);
}

export default Component;
