import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/codahaulz.css';
import '../../css/b/b54uexayv.css';
import '../../css/e/edas0ubvn.css';
import '../../css/a/a3mos-bte.css';
import '../../css/d/dde9wca7b.css';
import '../../css/e/ei_yh8byn.css';
import '../../css/b/b6is_enxg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="codahaulz"/><path class="b54uexayv"/><circle class="edas0ubvn"/><circle class="a3mos-bte"/><path class="dde9wca7b"/><circle class="ei_yh8byn"/><circle class="b6is_enxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-network"} {...others} />);
}

export default Component;
