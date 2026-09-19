import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/z/zh82qfm6f.css';
import '../../css/c/ci0or272r.css';
import '../../css/h/hk5t1dg9o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMuA3bbgW"><g class="gopnm44um"><circle class="zh82qfm6f"/><path class="ci0or272r"/><path class="hk5t1dg9o"/></g></mask></defs><path mask="url(#SVGMuA3bbgW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:font-search"} {...others} />);
}

export default Component;
