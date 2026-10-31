import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a5u2k433e.css';
import '../../css/m/mzdrhyiez.css';
import '../../css/n/nvcppzb8l.css';
import '../../css/e/eu920iavt.css';
import '../../css/w/w515tmb1w.css';
import '../../css/l/lfy6bib1v.css';
import '../../css/s/s3419s_5o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a5u2k433e"/><path class="mzdrhyiez"/><path class="nvcppzb8l"/><path class="eu920iavt"/><path class="w515tmb1w"/><path class="lfy6bib1v"/><path clip-rule="evenodd" class="s3419s_5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:troll-face"} {...others} />);
}

export default Component;
