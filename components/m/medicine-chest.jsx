import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e-qc7ybfy.css';
import '../../css/v/v4b5s9tmh.css';
import '../../css/i/iowna0rzx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGOK6PceUP"><g class="ft5dv1b6b"><rect class="e-qc7ybfy"/><path class="v4b5s9tmh"/><path class="iowna0rzx"/></g></mask></defs><path mask="url(#SVGOK6PceUP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:medicine-chest"} {...others} />);
}

export default Component;
