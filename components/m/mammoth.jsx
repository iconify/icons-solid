import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rspwt1iwi.css';
import '../../css/e/eoqc4rb5u.css';
import '../../css/i/itenzfzrw.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/r/rsh2e1ofs.css';
import '../../css/n/ng76bd_mi.css';
import '../../css/r/r9mwyybsf.css';
import '../../css/z/zio-c8bkg.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="rspwt1iwi"/><path class="eoqc4rb5u"/><path class="itenzfzrw"/><g class="jn8qy4bru"><path class="rsh2e1ofs"/><path class="ng76bd_mi"/><path class="r9mwyybsf"/><path class="zio-c8bkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:mammoth"} {...others} />);
}

export default Component;
