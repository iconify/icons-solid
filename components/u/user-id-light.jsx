import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/payoqhbax.css';
import '../../css/f/fnuy0_9ha.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="payoqhbax"/><path class="fnuy0_9ha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:user-id-light"} {...others} />);
}

export default Component;
