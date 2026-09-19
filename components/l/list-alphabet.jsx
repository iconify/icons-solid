import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tx0vkcbsy.css';
import '../../css/i/iarpp2o_e.css';
import '../../css/h/hk6ft-98v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGYl1ZTd2R"><g class="ft5dv1b6b"><path class="tx0vkcbsy"/><path class="iarpp2o_e"/><path class="hk6ft-98v"/></g></mask></defs><path mask="url(#SVGYl1ZTd2R)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:list-alphabet"} {...others} />);
}

export default Component;
