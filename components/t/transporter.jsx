import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/r9v9olbvu.css';
import '../../css/q/qfqew4w1l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG5viI2z1N"><g class="v3_i3wktz"><path class="r9v9olbvu"/><path class="qfqew4w1l"/></g></mask></defs><path mask="url(#SVG5viI2z1N)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:transporter"} {...others} />);
}

export default Component;
