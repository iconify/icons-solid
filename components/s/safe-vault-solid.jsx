import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zz7g64bgw.css';
import '../../css/u/uyvw0_bju.css';
import '../../css/i/idda6mbqk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zz7g64bgw"/><path clip-rule="evenodd" class="uyvw0_bju"/><path clip-rule="evenodd" class="idda6mbqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:safe-vault-solid"} {...others} />);
}

export default Component;
