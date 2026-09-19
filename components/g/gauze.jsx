import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/t/tafy_bkcg.css';
import '../../css/a/atfugacej.css';
import '../../css/x/x0v0iccjn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4ZhTfcIf"><g class="s9cl3zbei"><circle class="tafy_bkcg"/><circle class="atfugacej"/><path class="x0v0iccjn"/></g></mask></defs><path mask="url(#SVG4ZhTfcIf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:gauze"} {...others} />);
}

export default Component;
