import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5zyplxwt.css';
import '../../css/a/az-q9689c.css';
import '../../css/a/abvg3obzl.css';
import '../../css/h/hgeev0bml.css';
import '../../css/k/ky8lwcc4x.css';
import '../../css/x/xll8jdbiq.css';
import '../../css/s/snp287xku.css';
import '../../css/v/v3oba1uhi.css';
import '../../css/b/bk2elesgw.css';
import '../../css/d/d_uuarbqf.css';
import '../../css/p/pk4exgblc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e5zyplxwt"/><path class="az-q9689c"/><path class="abvg3obzl"/><path class="hgeev0bml"/><path class="ky8lwcc4x"/><path class="xll8jdbiq"/><path class="snp287xku"/><path class="v3oba1uhi"/><path class="bk2elesgw"/><path class="d_uuarbqf"/><path class="pk4exgblc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:peach"} {...others} />);
}

export default Component;
