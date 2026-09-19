import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/e/ei-jx0bkl.css';
import '../../css/f/fgw2kbbow.css';
import '../../css/c/c_cj3-b6o.css';
import '../../css/n/nowu8bc5a.css';
import '../../css/i/i2cggjtvu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkG7ZUbgQ"><g class="s9cl3zbei"><path class="ei-jx0bkl"/><path class="fgw2kbbow"/><path class="c_cj3-b6o"/><path class="nowu8bc5a"/><path class="i2cggjtvu"/></g></mask></defs><path mask="url(#SVGkG7ZUbgQ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:medicine-bottle"} {...others} />);
}

export default Component;
