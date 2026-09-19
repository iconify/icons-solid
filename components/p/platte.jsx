import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/z/ziae3bb2o.css';
import '../../css/v/vy88app5s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGV9fFDcSf"><g class="ylrso7y3c"><path class="ziae3bb2o"/><path class="vy88app5s"/></g></mask></defs><path mask="url(#SVGV9fFDcSf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:platte"} {...others} />);
}

export default Component;
