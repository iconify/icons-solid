import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/e/etzb_tbee.css';
import '../../css/z/zakgb2byz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjvsuDevK"><g class="ylrso7y3c"><rect class="etzb_tbee"/><path class="zakgb2byz"/></g></mask></defs><path mask="url(#SVGjvsuDevK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:handle-right"} {...others} />);
}

export default Component;
