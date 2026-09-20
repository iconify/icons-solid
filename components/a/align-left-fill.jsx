import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tlrg2jwsm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tlrg2jwsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:align-left-fill"} {...others} />);
}

export default Component;
