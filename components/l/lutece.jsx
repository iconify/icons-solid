import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8a58u7ck.css';
import '../../css/l/lw9qbabax.css';
import '../../css/f/fq7kcxiwl.css';
import '../../css/g/gqlpjnibd.css';
import '../../css/x/xppy41w3j.css';

const viewBox = {"width":100,"height":100,"top":-33.5};
const content = `<path class="s8a58u7ck"/><path class="lw9qbabax"/><path class="fq7kcxiwl"/><path class="gqlpjnibd"/><path class="xppy41w3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lutece"} {...others} />);
}

export default Component;
