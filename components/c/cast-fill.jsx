import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkpcifelj.css';
import '../../css/r/rzxh51_9l.css';
import '../../css/y/yqx0fwoad.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gkpcifelj"/><path class="rzxh51_9l"/><circle class="yqx0fwoad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:cast-fill"} {...others} />);
}

export default Component;
