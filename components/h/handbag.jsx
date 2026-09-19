import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p8q-m_98d.css';
import '../../css/t/t5y79tbhq.css';
import '../../css/j/jnpk6nmhv.css';
import '../../css/f/fzeqonvhj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZ7UxC25Y"><g class="ft5dv1b6b"><path class="p8q-m_98d"/><path class="t5y79tbhq"/><path class="jnpk6nmhv"/><path class="fzeqonvhj"/></g></mask></defs><path mask="url(#SVGZ7UxC25Y)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:handbag"} {...others} />);
}

export default Component;
