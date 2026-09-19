import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/q/qek2tkbit.css';
import '../../css/q/ql-g5bbuf.css';
import '../../css/t/tynws4brr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGxTNwcd8l"><g class="s9cl3zbei"><rect class="qek2tkbit"/><path class="ql-g5bbuf"/><path class="tynws4brr"/></g></mask></defs><path mask="url(#SVGxTNwcd8l)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:nine-key"} {...others} />);
}

export default Component;
