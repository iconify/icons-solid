import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ges_wsysv.css';
import '../../css/y/ypiwczbxz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ges_wsysv"/><path clip-rule="evenodd" class="ypiwczbxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:ai-smartphone-fill"} {...others} />);
}

export default Component;
