import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/h/hez4fkboo.css';
import '../../css/v/vt-d02btz.css';
import '../../css/y/y93muob-f.css';
import '../../css/o/o0hyrubuf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGYMEchepy"><g class="hv130ab-t"><path class="hez4fkboo"/><path class="vt-d02btz"/><path class="y93muob-f"/><path class="o0hyrubuf"/></g></mask></defs><path mask="url(#SVGYMEchepy)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:gate"} {...others} />);
}

export default Component;
