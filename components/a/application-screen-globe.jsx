import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivjvz2eii.css';
import '../../css/e/e2pg4n4zi.css';
import '../../css/b/bbt_30bjr.css';
import '../../css/k/k0urx9lik.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGYVzL0c5w" class="ivjvz2eii"><path clip-rule="evenodd" class="e2pg4n4zi"/></mask><path clip-rule="evenodd" class="bbt_30bjr"/><path mask="url(#SVGYVzL0c5w)" class="k0urx9lik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:application-screen-globe"} {...others} />);
}

export default Component;
