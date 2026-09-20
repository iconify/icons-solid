import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0o3zmben.css';
import '../../css/d/dn_h7dbug.css';
import '../../css/s/s9hvzfblf.css';
import '../../css/e/ebkr9o3it.css';
import '../../css/a/ai69p7nal.css';
import '../../css/k/kw-5oibaj.css';

const viewBox = {"width":72,"height":72};
const content = `<ellipse class="k0o3zmben"/><ellipse class="k0o3zmben"/><circle class="dn_h7dbug"/><ellipse class="s9hvzfblf"/><circle class="ebkr9o3it"/><circle class="ai69p7nal"/><circle class="kw-5oibaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:eye"} {...others} />);
}

export default Component;
