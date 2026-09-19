import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/y/yy7ol1bks.css';
import '../../css/e/enoqa7bof.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgedRfbIA"><g class="hv130ab-t"><path class="yy7ol1bks"/><path class="enoqa7bof"/></g></mask></defs><path mask="url(#SVGgedRfbIA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:online-meeting"} {...others} />);
}

export default Component;
