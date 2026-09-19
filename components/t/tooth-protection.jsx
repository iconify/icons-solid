import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9av61y3y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k9av61y3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:tooth-protection"} {...others} />);
}

export default Component;
