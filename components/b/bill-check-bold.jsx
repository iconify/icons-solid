import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cm9i-e9gu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cm9i-e9gu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bill-check-bold"} {...others} />);
}

export default Component;
