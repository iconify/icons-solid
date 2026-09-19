import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4i2bbc8w.css';
import '../../css/p/pv7xol74s.css';
import '../../css/z/z9youcaqg.css';
import '../../css/v/v0m5xdb6q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<mask id="ipSProportionalScaling0"><g class="ft5dv1b6b"><g clip-path="url(#ipSProportionalScaling1)" class="a4i2bbc8w"><path class="pv7xol74s"/><path class="z9youcaqg"/></g><defs><clipPath id="ipSProportionalScaling1"><path class="v0m5xdb6q"/></clipPath></defs></g></mask><path mask="url(#ipSProportionalScaling0)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:proportional-scaling"} {...others} />);
}

export default Component;
