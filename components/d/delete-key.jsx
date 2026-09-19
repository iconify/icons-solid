import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/v/v0bedlbho.css';
import '../../css/z/zyr8pvb8a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJIRo7nXw"><g class="wwvp95byt"><path class="v0bedlbho"/><path class="zyr8pvb8a"/></g></mask></defs><path mask="url(#SVGJIRo7nXw)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:delete-key"} {...others} />);
}

export default Component;
