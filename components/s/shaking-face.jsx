import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp597vb1l.css';
import '../../css/x/x5bkmobtu.css';
import '../../css/n/n3fug7ags.css';
import '../../css/w/wq6fa8bzw.css';
import '../../css/j/jo1t8bcmc.css';
import '../../css/i/i4485ab4f.css';
import '../../css/l/l-brvabpd.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="gp597vb1l"/><ellipse class="x5bkmobtu"/><circle class="n3fug7ags"/><path class="wq6fa8bzw"/><ellipse transform="rotate(-31.607 26.484 36.052)" class="jo1t8bcmc"/><ellipse transform="rotate(-39.583 37.77 27.323)" class="i4485ab4f"/><path class="l-brvabpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:shaking-face"} {...others} />);
}

export default Component;
