import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrwg9d6kl.css';
import '../../css/e/eqy7e86_g.css';
import '../../css/n/nuc11qh6t.css';
import '../../css/w/w-9yqheju.css';
import '../../css/n/ncbouabcg.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="zrwg9d6kl"/><path class="eqy7e86_g"/><path class="nuc11qh6t"/><path class="w-9yqheju"/><path class="ncbouabcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:nhibernate-wordmark"} {...others} />);
}

export default Component;
