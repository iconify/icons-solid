import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0jksjblz.css';
import '../../css/b/bfpxu9v3l.css';
import '../../css/j/jfkme2bwa.css';
import '../../css/v/v5iekpb5c.css';
import '../../css/z/z63kx322b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGaVVwMdAA"><g class="ft5dv1b6b"><circle class="t0jksjblz"/><path class="bfpxu9v3l"/><path class="jfkme2bwa"/><path class="v5iekpb5c"/><path class="z63kx322b"/></g></mask></defs><path mask="url(#SVGaVVwMdAA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:ad"} {...others} />);
}

export default Component;
