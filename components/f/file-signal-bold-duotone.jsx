import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj6gwrmjs.css';
import '../../css/e/epxpc5bbp.css';
import '../../css/n/ng2t0it8x.css';
import '../../css/f/fmnpkbl0c.css';
import '../../css/x/x4f46-b2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oj6gwrmjs"/><path class="epxpc5bbp"/><path class="ng2t0it8x"/><path clip-rule="evenodd" class="fmnpkbl0c"/><path class="x4f46-b2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-signal-bold-duotone"} {...others} />);
}

export default Component;
