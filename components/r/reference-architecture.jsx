import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzck_dcet.css';
import '../../css/h/hxm77oqrd.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="xzck_dcet"/><path class="hxm77oqrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:reference-architecture"} {...others} />);
}

export default Component;
