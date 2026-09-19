import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/w/wjdswlb4u.css';
import '../../css/l/layqpjf-y.css';
import '../../css/f/fmyh7abrs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGCqbjHezU"><g class="wwvp95byt"><rect transform="rotate(45 24.762 3.243)" class="wjdswlb4u"/><path class="layqpjf-y"/><path class="fmyh7abrs"/></g></mask></defs><path mask="url(#SVGCqbjHezU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:tray"} {...others} />);
}

export default Component;
