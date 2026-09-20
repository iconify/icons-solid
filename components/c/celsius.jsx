import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/orexe2b-x.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><symbol id="SVGR15heb5B" viewBox="0 0 109.1 73.2"><path class="orexe2b-x"/></symbol></defs><use width="109.1" height="73.2" href="#SVGR15heb5B" transform="matrix(1.46 0 0 1.47 176.26 202.35)"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:celsius"} {...others} />);
}

export default Component;
