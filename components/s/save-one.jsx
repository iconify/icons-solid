import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/f/f_85gibla.css';
import '../../css/e/e3j8mebgs.css';
import '../../css/n/n2grqgz0s.css';
import '../../css/t/t0oyecvos.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGthzZLJZS"><g class="s9cl3zbei"><path class="f_85gibla"/><path class="e3j8mebgs"/><path class="n2grqgz0s"/><path class="t0oyecvos"/></g></mask></defs><path mask="url(#SVGthzZLJZS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:save-one"} {...others} />);
}

export default Component;
