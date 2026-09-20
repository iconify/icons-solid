import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tiaq27v-e.css';
import '../../css/b/b0rftsbjb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tiaq27v-e"/><path class="b0rftsbjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:compass-light"} {...others} />);
}

export default Component;
