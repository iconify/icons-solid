import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/e/e2w5edbxq.css';
import '../../css/t/tyi7s5b9y.css';
import '../../css/b/bydi6pbak.css';
import '../../css/i/it3lebcor.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGqzZYu2uI"><g class="s9cl3zbei"><path class="e2w5edbxq"/><path class="tyi7s5b9y"/><path class="bydi6pbak"/><path class="it3lebcor"/></g></mask></defs><path mask="url(#SVGqzZYu2uI)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:shaver"} {...others} />);
}

export default Component;
