import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/c/cyzti895k.css';
import '../../css/c/cmbowxb1u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGoxqT4cMo"><g class="ufeehvblu"><path class="cyzti895k"/><path class="cmbowxb1u"/></g></mask></defs><path mask="url(#SVGoxqT4cMo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:paper-money"} {...others} />);
}

export default Component;
