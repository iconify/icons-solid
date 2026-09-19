import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/j/jnhwfibdi.css';
import '../../css/f/f0eoi3b2v.css';
import '../../css/k/kg_-czs4x.css';
import '../../css/l/lru14bdan.css';
import '../../css/j/jxo0kq-5m.css';
import '../../css/i/iyjslbbxb.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="jnhwfibdi"/><path class="f0eoi3b2v"/><path class="kg_-czs4x"/><path class="lru14bdan"/><circle class="jxo0kq-5m"/><circle class="iyjslbbxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-ko"} {...others} />);
}

export default Component;
