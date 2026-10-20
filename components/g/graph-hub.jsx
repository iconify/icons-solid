import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tcwe4ewrv.css';
import '../../css/w/w9-l4pzix.css';
import '../../css/z/zopjch_2q.css';
import '../../css/n/ny1qr-80o.css';
import '../../css/o/o80unubzf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="tcwe4ewrv"/><circle class="w9-l4pzix"/><circle class="zopjch_2q"/><circle class="ny1qr-80o"/><path class="o80unubzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:graph-hub"} {...others} />);
}

export default Component;
