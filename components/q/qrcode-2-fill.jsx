import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdg726bhb.css';
import '../../css/e/e74mzrb2k.css';
import '../../css/v/v_mr9f9tj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fdg726bhb"/><path clip-rule="evenodd" class="e74mzrb2k"/><path class="v_mr9f9tj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:qrcode-2-fill"} {...others} />);
}

export default Component;
