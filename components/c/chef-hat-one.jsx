import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/d/drd1ksbea.css';
import '../../css/e/e_lqy89xg.css';
import '../../css/k/kkp0a4bbd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGBCeVleQo"><g class="wwvp95byt"><path class="drd1ksbea"/><path class="e_lqy89xg"/><path class="kkp0a4bbd"/></g></mask></defs><path mask="url(#SVGBCeVleQo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:chef-hat-one"} {...others} />);
}

export default Component;
