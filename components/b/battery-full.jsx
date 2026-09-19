import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b-sj49_df.css';
import '../../css/q/q0fujjtaq.css';
import '../../css/m/mzx-9l7rh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGutPKmbqV"><g class="ft5dv1b6b"><path class="b-sj49_df"/><path class="q0fujjtaq"/><path class="mzx-9l7rh"/></g></mask></defs><path mask="url(#SVGutPKmbqV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:battery-full"} {...others} />);
}

export default Component;
