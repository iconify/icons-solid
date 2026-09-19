import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/t/toz1dpcji.css';
import '../../css/y/ysw8cmbcj.css';
import '../../css/w/w2xpt4b5w.css';
import '../../css/k/k-2sy8b0k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJrUFRl7h"><g class="s9cl3zbei"><rect class="toz1dpcji"/><circle class="ysw8cmbcj"/><path class="w2xpt4b5w"/><path class="k-2sy8b0k"/></g></mask></defs><path mask="url(#SVGJrUFRl7h)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:radio"} {...others} />);
}

export default Component;
