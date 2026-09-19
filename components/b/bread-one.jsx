import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/w/wfz69ubcx.css';
import '../../css/k/kdtynsvjd.css';
import '../../css/i/ix8x4zvlu.css';
import '../../css/b/b_uvzobyj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZvNBZd5Y"><g class="aql7dnt-u"><path class="wfz69ubcx"/><path class="kdtynsvjd"/><path class="ix8x4zvlu"/><path class="b_uvzobyj"/></g></mask></defs><path mask="url(#SVGZvNBZd5Y)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bread-one"} {...others} />);
}

export default Component;
