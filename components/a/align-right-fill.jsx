import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lajo8c0zh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lajo8c0zh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:align-right-fill"} {...others} />);
}

export default Component;
