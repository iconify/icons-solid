import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6x784t-a.css';
import '../../css/z/z2lg6u2gl.css';
import '../../css/r/rj5nmqbtj.css';
import '../../css/k/k7a_rqnoj.css';
import '../../css/p/pqbp2bdrz.css';

const viewBox = {"width":256,"height":257};
const content = `<path class="r6x784t-a"/><path class="z2lg6u2gl"/><path class="rj5nmqbtj"/><path class="k7a_rqnoj"/><path class="pqbp2bdrz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:jwt"} {...others} />);
}

export default Component;
