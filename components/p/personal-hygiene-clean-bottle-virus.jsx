import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzc8en32u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xzc8en32u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:personal-hygiene-clean-bottle-virus"} {...others} />);
}

export default Component;
