import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ost-0qr-b.css';
import '../../css/r/r5tlw_31c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ost-0qr-b"/><path clip-rule="evenodd" class="r5tlw_31c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:ai-lock-fill"} {...others} />);
}

export default Component;
