import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m088jbc1k.css';
import '../../css/o/osy329bko.css';
import '../../css/w/wd942qb8r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGBnFofygF"><g class="s9cl3zbei"><path class="m088jbc1k"/><rect class="osy329bko"/><path class="wd942qb8r"/></g></mask></defs><path mask="url(#SVGBnFofygF)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:financing-two"} {...others} />);
}

export default Component;
