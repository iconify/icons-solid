import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/c/cu5xsb1ef.css';
import '../../css/d/dc6lm7bsh.css';
import '../../css/s/s410bdces.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGC57gpd2B"><g class="hv130ab-t"><rect class="cu5xsb1ef"/><path class="dc6lm7bsh"/><path class="s410bdces"/></g></mask></defs><path mask="url(#SVGC57gpd2B)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:chinese"} {...others} />);
}

export default Component;
