import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/va8uaub1u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="va8uaub1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:suspension-bolt"} {...others} />);
}

export default Component;
