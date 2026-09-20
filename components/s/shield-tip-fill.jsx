import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jm3y845ik.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jm3y845ik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:shield-tip-fill"} {...others} />);
}

export default Component;
