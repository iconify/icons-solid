import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uc7aclrmb.css';
import '../../css/f/f4xb95eqz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uc7aclrmb"/><path clip-rule="evenodd" class="f4xb95eqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:ai-unlock-fill"} {...others} />);
}

export default Component;
