import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/f/fgokb7h8d.css';
import '../../css/z/zw-68k1ry.css';
import '../../css/z/z2hbabcdb.css';
import '../../css/a/al3gikwgt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGYReMxexd"><g class="ufeehvblu"><path class="fgokb7h8d"/><rect class="zw-68k1ry"/><rect class="z2hbabcdb"/><path class="al3gikwgt"/></g></mask></defs><path mask="url(#SVGYReMxexd)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:city-one"} {...others} />);
}

export default Component;
