import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jok1bt80t.css';
import '../../css/u/uhp8mr7nr.css';
import '../../css/l/lizx6ggkd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRaw5ebJl"><g class="ft5dv1b6b"><path class="jok1bt80t"/><path class="uhp8mr7nr"/><path class="lizx6ggkd"/></g></mask></defs><path mask="url(#SVGRaw5ebJl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:arrow-keys"} {...others} />);
}

export default Component;
