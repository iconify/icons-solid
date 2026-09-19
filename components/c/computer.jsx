import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/a/aw8asbupg.css';
import '../../css/k/khai3abln.css';
import '../../css/y/ywu8tfbvo.css';
import '../../css/l/llngj8bvv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnKHJubgT"><g class="s9cl3zbei"><path class="aw8asbupg"/><rect class="khai3abln"/><path class="ywu8tfbvo"/><path class="llngj8bvv"/></g></mask></defs><path mask="url(#SVGnKHJubgT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:computer"} {...others} />);
}

export default Component;
