import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/p/pqn0aix0g.css';
import '../../css/l/lw-duqbbf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGEldDdqf"><g class="s9cl3zbei"><path class="pqn0aix0g"/><path class="lw-duqbbf"/></g></mask></defs><path mask="url(#SVGGEldDdqf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:other"} {...others} />);
}

export default Component;
